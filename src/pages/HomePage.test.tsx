import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';

import CardsProvider from '../context/cardsProvider';
import HomePage from '../pages/HomePage';
import store from '../store';

describe('HomePage', () => {
  it('removes loader after initial search query', async () => {
    render(
      <Provider store={store}>
        <CardsProvider>
          <HomePage />
        </CardsProvider>
      </Provider>
    );
    expect(await screen.findByTestId('loader')).not.toBeInTheDocument();
  });

  it('renders cards from API for searh query (harry)', async () => {
    const user = userEvent.setup();

    render(
      <Provider store={store}>
        <CardsProvider>
          <HomePage />
        </CardsProvider>
      </Provider>
    );
    const search = screen.getByPlaceholderText(/search/i);
    user.type(search, 'harry{enter}');

    const HARRY_TEXT_APPEAR_ON_PAGE = 21;
    expect(await screen.findAllByText(/harry/i)).toHaveLength(HARRY_TEXT_APPEAR_ON_PAGE);
  });
});
