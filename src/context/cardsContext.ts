import React from 'react';

import { ICardsContext } from '../models/types';

const CardsContext = React.createContext<ICardsContext>({
  cards: [],
  addCardsHandler: () => {},
});

export default CardsContext;
