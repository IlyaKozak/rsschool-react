import { readFile } from 'fs/promises';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import type { Request, Response } from 'express';
import { createServer as createViteServer, ViteDevServer } from 'vite';

const __dirname = dirname(fileURLToPath(import.meta.url));
const resolvePath = (pathToResolve: string) => resolve(__dirname, pathToResolve);

async function createServer() {
  const app = express();

  const isProduction = process.env.NODE_ENV === 'production';
  let vite: ViteDevServer;

  if (!isProduction) {
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom',
    });

    app.use(vite.middlewares);
  } else {
    app.use((await import('compression')).default());
    app.use(
      (await import('serve-static')).default(resolvePath('./client'), {
        index: false,
      })
    );
  }

  app.use('*', async (req: Request, res: Response) => {
    const url = req.originalUrl;

    try {
      let template;
      let render;

      if (!isProduction) {
        template = await readFile(resolvePath('index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, template);
        render = (await vite.ssrLoadModule('/src/entryServer.tsx')).render;
      } else {
        template = await readFile(resolvePath('./client/index.html'), 'utf-8');
        render = (await import(resolvePath('./server/entryServer.js'))).render;
      }

      try {
        const htmlParts = template.split('<!--app-->');
        const [{ pipe }, preloadedState] = await render(req, {
          onShellReady() {
            res.write(htmlParts[0]);
            pipe(res);
          },
          onShellError(error: unknown) {
            console.error(error);
          },
          onAllReady() {
            res.write(htmlParts[1]);
            res.write(`<script>window.__PRELOADED_STATE__ = ${JSON.stringify(
              preloadedState
            ).replace(/</g, '\\u003c')}</script>
            `);
            res.write(htmlParts[2]);
            res.end();
          },
          onError(error: unknown) {
            console.error(error);
          },
        });
      } catch (e) {
        if (e instanceof Response && e.status >= 300 && e.status <= 399) {
          return res.redirect(301, e.url);
        }
        throw e;
      }
    } catch (error) {
      if (!(error instanceof Error)) return;
      if (!isProduction) {
        vite.ssrFixStacktrace(error);
      }
      res.status(500).end(error);
    }
  });

  app.listen(5173, () =>
    console.log(
      isProduction ? 'Production' : 'Development',
      'Server listening on http://localhost:5173'
    )
  );
}

createServer();
