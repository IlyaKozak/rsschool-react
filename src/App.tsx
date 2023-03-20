import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/RootLayout';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import { PagePath } from './constants/pages';
import './index.css';

export const routes = [
  {
    path: PagePath.Home,
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: PagePath.Home, element: <HomePage /> },
      { path: PagePath.About, element: <AboutPage /> },
    ],
  },
];

export default class App extends React.Component {
  render() {
    return <RouterProvider router={createBrowserRouter(routes)} />;
  }
}
