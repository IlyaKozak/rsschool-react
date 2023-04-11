import React from 'react';

import { ICardsContext } from '../types/context';

const CardsContext = React.createContext<ICardsContext>({
  responseData: [],
  updateResponseData: () => {},
  cards: [],
  updateCards: () => {},
});

export default CardsContext;
