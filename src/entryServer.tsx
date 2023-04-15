import { Request } from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {
  createStaticHandler,
  createStaticRouter,
  StaticHandlerContext,
  StaticRouterProvider,
} from 'react-router-dom/server';

import createFetchRequest from './utils/createFetchRequest';
import routes from './routes';

export async function render(req: Request) {
  const { query, dataRoutes } = createStaticHandler(routes);
  const fetchRequest = createFetchRequest(req);
  const context = (await query(fetchRequest)) as StaticHandlerContext;

  return ReactDOMServer.renderToString(
    <React.StrictMode>
      <StaticRouterProvider router={createStaticRouter(dataRoutes, context)} context={context} />
    </React.StrictMode>
  );
}
