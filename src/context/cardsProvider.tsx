import { PropsWithChildren, useState } from 'react';

import CardsContext from './cardsContext';
import { Card } from '../models/types';
import { books } from '../mock/books';

const CardsProvider = (props: PropsWithChildren) => {
  const [cards, setCards] = useState<Card[]>([...books]);

  const addCardHandler = (card: Card) => {
    setCards((prevCards) => [...prevCards, card]);
  };

  const cardsContext = {
    cards,
    addCardHandler,
  };

  return <CardsContext.Provider value={cardsContext}>{props.children}</CardsContext.Provider>;
};

export default CardsProvider;
