import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { routes } from './App';

describe('App', () => {
  it('Renders not found page if invalid path', () => {
    const router = createMemoryRouter(routes, { initialEntries: ['/this-route-does-not-exist'] });
    render(<RouterProvider router={router} />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/not found/i);
  });

  it('Renders about page if /about path', () => {
    const router = createMemoryRouter(routes, { initialEntries: ['/about'] });
    render(<RouterProvider router={router} />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/about/i);
  });

  it('Renders home page if / path', () => {
    const router = createMemoryRouter(routes, { initialEntries: ['/'] });
    render(<RouterProvider router={router} />);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/home/i);
  });
});
