import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './pages/RootLayout';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import FormPage from './pages/FormPage';
import { pagePath } from './constants/constants';
import './index.css';

export const routes = [
  {
    path: pagePath.Home,
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: pagePath.Home, element: <HomePage /> },
      { path: pagePath.About, element: <AboutPage /> },
      { path: pagePath.Form, element: <FormPage /> },
    ],
  },
];

const App: React.FC = () => {
  return <RouterProvider router={createBrowserRouter(routes)} />;
};

export default App;
