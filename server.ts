import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express, { NextFunction, Request, Response } from 'express';
import { createServer as createViteServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function createServer() {
  const app = express();

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });

  app.use(vite.middlewares);

  app.use('*', async (req: Request, res: Response, next: NextFunction) => {
    const url = req.originalUrl;

    try {
      let template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
      template = await vite.transformIndexHtml(url, template);
      const htmlParts = template.split('<!--app-html-->');

      const { render } = await vite.ssrLoadModule('/src/entryServer.tsx');
      const { pipe } = await render(req, {
        onShellReady() {
          res.write(htmlParts[0]);
          pipe(res);
        },
        onShellError(error: unknown) {
          console.error(error);
        },
        onAllReady() {
          res.write(htmlParts[1]);
          res.end();
        },
        onError(error: unknown) {
          console.error(error);
        },
      });
    } catch (e) {
      if (e instanceof Error) {
        vite.ssrFixStacktrace(e);
      }
      next(e);
    }
  });

  app.listen(5173, () => console.log('Server listening on http://localhost:5173'));
}

createServer();
