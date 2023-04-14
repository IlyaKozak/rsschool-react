import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';

import HomePage from '../pages/HomePage';
import store from '../store';

describe('HomePage', () => {
  it('renders loader after entering search query', async () => {
    const user = userEvent.setup();

    render(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );

    const search = screen.getByPlaceholderText(/search/i);
    user.type(search, 'harry{enter}');

    expect(await screen.findByTestId('loader')).toBeInTheDocument();
  });

  it('renders cards from API for searh query (harry)', async () => {
    const user = userEvent.setup();

    render(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );
    const search = screen.getByPlaceholderText(/search/i);
    user.type(search, 'harry{enter}');

    const HARRY_TEXT_APPEAR_ON_PAGE = 21;
    expect(await screen.findAllByText(/harry/i)).toHaveLength(HARRY_TEXT_APPEAR_ON_PAGE);
  });
});
