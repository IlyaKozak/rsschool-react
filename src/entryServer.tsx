import { Request } from 'express';
import React from 'react';
import ReactDOMServer, { RenderToPipeableStreamOptions } from 'react-dom/server';
import {
  createStaticHandler,
  createStaticRouter,
  StaticRouterProvider,
  StaticHandlerContext,
} from 'react-router-dom/server';

import createFetchRequest from './utils/createFetchRequest';
import routes from './routes';

export async function render(req: Request, options?: RenderToPipeableStreamOptions) {
  const { query, dataRoutes } = createStaticHandler(routes);
  const fetchRequest = createFetchRequest(req);

  const context = (await query(fetchRequest)) as StaticHandlerContext;

  return ReactDOMServer.renderToPipeableStream(
    <React.StrictMode>
      <StaticRouterProvider router={createStaticRouter(dataRoutes, context)} context={context} />
    </React.StrictMode>,
    options
  );
}
