import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { MemoryRouter } from 'react-router-dom';
import HeaderNavigation from './HeaderNavigation';

describe('HeaderNavigation', () => {
  it('changes heading on link click', async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <HeaderNavigation />
      </MemoryRouter>
    );

    await user.click(screen.getByRole('link', { name: 'About' }));

    expect(await screen.findByRole('heading', { level: 2 })).toHaveTextContent(/about/i);
  });

  it('changes active classes on link click', async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <HeaderNavigation />
      </MemoryRouter>
    );
    const homeLink = screen.getByRole('link', { name: 'Home' });
    const aboutLink = screen.getByRole('link', { name: 'About' });

    expect(homeLink).toHaveClass('active');
    expect(aboutLink).not.toHaveClass('active');
    await user.click(aboutLink);
    expect(homeLink).not.toHaveClass('active');
    expect(aboutLink).toHaveClass('active');
  });
});
