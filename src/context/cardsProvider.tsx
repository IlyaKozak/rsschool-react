import { PropsWithChildren, useCallback, useState } from 'react';

import CardsContext from './cardsContext';
import { MiniCard } from '../types/miniCard';
import { ResponseData } from '../types/responseData';

const CardsProvider = (props: PropsWithChildren) => {
  const [responseData, setResponseData] = useState<ResponseData[]>([]);
  const [cards, setCards] = useState<MiniCard[]>([]);

  const updateCards = useCallback((cards: MiniCard[]) => {
    setCards(cards);
  }, []);

  const updateResponseData = useCallback((data: ResponseData[]) => {
    setResponseData(data);
  }, []);

  const cardsContext = {
    responseData,
    updateResponseData,
    cards,
    updateCards,
  };

  return <CardsContext.Provider value={cardsContext}>{props.children}</CardsContext.Provider>;
};

export default CardsProvider;
