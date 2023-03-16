import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/RootLayout';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import { PagePath } from './constants/pages';
import './index.css';

const router = createBrowserRouter([
  {
    path: PagePath.Home,
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: PagePath.Home, element: <HomePage /> },
      { path: PagePath.About, element: <AboutPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
