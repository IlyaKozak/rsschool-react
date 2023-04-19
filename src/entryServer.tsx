import { Request } from 'express';
import React from 'react';
import ReactDOMServer, { RenderToPipeableStreamOptions } from 'react-dom/server';
import {
  createStaticHandler,
  createStaticRouter,
  StaticRouterProvider,
  StaticHandlerContext,
} from 'react-router-dom/server';
import { Provider } from 'react-redux';

import createFetchRequest from './utils/createFetchRequest';
import routes from './routes';
import { setupStore } from './store';
import { openLibraryApi } from './services/openLibraryApi';

export async function render(req: Request, options?: RenderToPipeableStreamOptions) {
  const { query, dataRoutes } = createStaticHandler(routes);
  const fetchRequest = createFetchRequest(req);

  const context = (await query(fetchRequest)) as StaticHandlerContext;

  if (context instanceof Response) {
    throw context;
  }

  const INITIAL_SSR_SEARCH = 'server side rendering';

  const store = setupStore({
    search: { searchValue: INITIAL_SSR_SEARCH, initialSearchInput: '' },
  });

  store.dispatch(openLibraryApi.util.prefetch('searchBooks', INITIAL_SSR_SEARCH, {}));
  await Promise.all(store.dispatch(openLibraryApi.util.getRunningQueriesThunk()));
  const preloadedState = store.getState();

  return [
    ReactDOMServer.renderToPipeableStream(
      <React.StrictMode>
        <Provider store={store}>
          <StaticRouterProvider
            router={createStaticRouter(dataRoutes, context)}
            context={context}
          />
        </Provider>
      </React.StrictMode>,
      options
    ),
    preloadedState,
  ];
}
