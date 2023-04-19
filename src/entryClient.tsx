import React from 'react';
import ReactDOMClient from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

import routes from './routes';
import { RootState, setupStore } from './store';

declare global {
  interface Window {
    __PRELOADED_STATE__: RootState;
  }
}

const preloadedState = window.__PRELOADED_STATE__;

ReactDOMClient.hydrateRoot(
  document.getElementById('app') as HTMLElement,
  <React.StrictMode>
    <Provider store={setupStore(preloadedState)}>
      <RouterProvider router={createBrowserRouter(routes)} />
    </Provider>
  </React.StrictMode>
);
