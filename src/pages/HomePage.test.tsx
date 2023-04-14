import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { rest, server } from '../../testServer';
import { API_TEST } from '../constants/api';
import { apiResponse } from '../mock/apiResponse';
import HomePage from '../pages/HomePage';
import { renderWithProviders } from '../utils/testUtils';

describe('HomePage', () => {
  it('renders loader after entering search query', async () => {
    server.use(
      rest.get(API_TEST.OpenLibraryTest, (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(apiResponse), ctx.delay(100));
      })
    );

    const user = userEvent.setup();

    renderWithProviders(<HomePage />);

    const search = screen.getByPlaceholderText(/search/i);
    user.type(search, 'harry{enter}');

    expect(await screen.findByTestId('loader')).toBeInTheDocument();
  });

  it('renders cards from API for searh query (harry)', async () => {
    const user = userEvent.setup();

    renderWithProviders(<HomePage />);
    const search = screen.getByPlaceholderText(/search/i);
    user.type(search, 'harry{enter}');

    const HARRY_TEXT_APPEAR_ON_PAGE = 21;
    expect(await screen.findAllByText(/harry/i)).toHaveLength(HARRY_TEXT_APPEAR_ON_PAGE);
  });
});
