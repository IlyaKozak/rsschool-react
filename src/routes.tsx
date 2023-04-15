import RootLayout from './pages/RootLayout';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import FormPage from './pages/FormPage';
import { pagePath } from './constants/constants';

export const routes = [
  {
    path: pagePath.Home,
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: pagePath.About, element: <AboutPage /> },
      { path: pagePath.Form, element: <FormPage /> },
    ],
  },
];

export default routes;
