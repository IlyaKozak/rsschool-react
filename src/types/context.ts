import { MiniCard } from './miniCard';
import { ResponseData } from './responseData';

export interface ICardsContext {
  responseData: ResponseData[];
  updateResponseData: (data: ResponseData[]) => void;
  cards: MiniCard[];
  updateCards: (cards: MiniCard[]) => void;
}
