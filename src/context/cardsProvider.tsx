import { PropsWithChildren, useState } from 'react';

import CardsContext from './cardsContext';
import { MiniCard } from '../models/types';

const CardsProvider = (props: PropsWithChildren) => {
  const [cards, setCards] = useState<MiniCard[]>([]);

  const addCardsHandler = (cards: MiniCard[]) => {
    setCards(cards);
  };

  const cardsContext = {
    cards,
    addCardsHandler,
  };

  return <CardsContext.Provider value={cardsContext}>{props.children}</CardsContext.Provider>;
};

export default CardsProvider;
