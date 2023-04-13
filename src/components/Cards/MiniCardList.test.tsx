import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

import { rest, server } from '../../../testServer';
import { API } from '../../constants/api';
import CardsContext from '../../context/cardsContext';
import { apiResponse } from '../../mock/apiResponse';
import { miniCards } from '../../mock/cards';
import { fullCard } from '../../mock/fullCard';
import { ICardsContext } from '../../types/context';
import { ResponseData } from '../../types/responseData';
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
    render(<MiniCardList books={miniCards} />);

    const HARRY_TEXT_APPEAR_ON_PAGE = 21;
    expect(screen.queryAllByText(/harry/i)).toHaveLength(HARRY_TEXT_APPEAR_ON_PAGE);
  });

  it('renders full card modal on click', async () => {
    let portalRoot = document.getElementById('portal');
    if (!portalRoot) {
      portalRoot = document.createElement('div');
      portalRoot.setAttribute('id', 'portal');
      document.body.appendChild(portalRoot);
    }

    const user = userEvent.setup();

    render(<MiniCardList books={miniCards} />);
    const card = screen.getByText(/Harry The Dirty Dog/i);
    user.click(card);
    expect(await screen.findByTestId('modal')).toBeInTheDocument();
  });

  it('renders full card with description', async () => {
    let portalRoot = document.getElementById('portal');
    if (!portalRoot) {
      portalRoot = document.createElement('div');
      portalRoot.setAttribute('id', 'portal');
      document.body.appendChild(portalRoot);
    }

    server.use(
      rest.get(API.BookUrl + fullCard.key + '.json', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(fullCard));
      })
    );

    const user = userEvent.setup();

    const cardsContext: ICardsContext = {
      responseData: apiResponse.docs as ResponseData[],
      updateResponseData: vi.fn(),
      cards: miniCards,
      updateCards: vi.fn(),
    };

    render(
      <CardsContext.Provider value={cardsContext}>
        <MiniCardList books={miniCards} />
      </CardsContext.Provider>
    );
    const card = screen.getByText(/Harry The Dirty Dog/i);
    await user.click(card);

    expect(
      await screen.findByText(/When a white dog with black spots runs away from home/i)
    ).toBeInTheDocument();
  });
});
