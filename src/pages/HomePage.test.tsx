import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import CardsProvider from '../context/cardsProvider';

import HomePage from '../pages/HomePage';

describe('HomePage', () => {
  it('renders loader after entering search query', async () => {
    const user = userEvent.setup();

    render(<HomePage />);
    const search = screen.getByPlaceholderText(/search/i);
    user.type(search, 'harry{enter}');

    expect(await screen.findByTestId('loader')).toBeInTheDocument();
  });

  it('renders cards from API for searh query (harry)', async () => {
    const user = userEvent.setup();

    render(
      <CardsProvider>
        <HomePage />
      </CardsProvider>
    );
    const search = screen.getByPlaceholderText(/search/i);
    user.type(search, 'harry{enter}');

    const HARRY_TEXT_APPEAR_ON_PAGE = 21;
    expect(await screen.findAllByText(/harry/i)).toHaveLength(HARRY_TEXT_APPEAR_ON_PAGE);
  });
});
