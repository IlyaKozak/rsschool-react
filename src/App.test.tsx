import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { routes } from './App';

describe('App', () => {
  it('renders not found page if invalid path', () => {
    const router = createMemoryRouter(routes, { initialEntries: ['/this-route-does-not-exist'] });
    render(<RouterProvider router={router} />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/not found/i);
  });

  it('renders about page if /about path', () => {
    const router = createMemoryRouter(routes, { initialEntries: ['/about'] });
    render(<RouterProvider router={router} />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/about/i);
  });

  it('renders home page if / path', () => {
    const router = createMemoryRouter(routes, { initialEntries: ['/'] });
    render(<RouterProvider router={router} />);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/home/i);
  });

  it('renders form page if /form path', () => {
    const router = createMemoryRouter(routes, { initialEntries: ['/form'] });
    render(<RouterProvider router={router} />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/submit/i);
  });
});
