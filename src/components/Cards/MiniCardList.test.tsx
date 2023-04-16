import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { rest, server } from '../../../testServer';
import { API_TEST } from '../../constants/api';
import { miniCards } from '../../mock/cards';
import { fullCard } from '../../mock/fullCard';
import { renderWithProviders } from '../../utils/testUtils';
import MiniCardList from './MiniCardList';

beforeEach(() => {
  let portalRoot = document.getElementById('portal');
  if (!portalRoot) {
    portalRoot = document.createElement('div');
    portalRoot.setAttribute('id', 'portal');
    document.body.appendChild(portalRoot);
  }
});

describe('MiniCardList', () => {
  it('renders cards', async () => {
    renderWithProviders(<MiniCardList books={miniCards} />);

    const HARRY_TEXT_APPEAR_ON_PAGE = 21;
    expect(screen.queryAllByText(/harry/i)).toHaveLength(HARRY_TEXT_APPEAR_ON_PAGE);
  });

  it('renders full card modal on click', async () => {
    const user = userEvent.setup();
    renderWithProviders(<MiniCardList books={miniCards} />);
    const card = screen.getByText(/Harry The Dirty Dog/i);
    user.click(card);

    expect(await screen.findByTestId('modal')).toBeInTheDocument();
  });

  it('renders full card with description', async () => {
    server.use(
      rest.get(API_TEST.OpenLibrary + fullCard.key + '.json', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(fullCard), ctx.delay(100));
      })
    );
    const user = userEvent.setup();

    renderWithProviders(<MiniCardList books={miniCards} />);
    const card = screen.getByText(/Harry The Dirty Dog/i);
    user.click(card);

    expect(
      await screen.findByText(/When a white dog with black spots runs away from home/i)
    ).toBeInTheDocument();
  });
});
