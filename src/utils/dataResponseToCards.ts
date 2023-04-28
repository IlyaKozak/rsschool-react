import { MiniCard } from '../types/miniCard';
import { ResponseData } from '../types/responseData';

export const responseDataToCards = (acc: MiniCard[], card: ResponseData) => {
  const { title, author_name, first_publish_year: published, key: id } = card;
  const author = author_name?.slice(0, 2).join(', ');
  if (!title || !author || !published) return acc;
  const newCard = new MiniCard({ id, title, author, published });
  acc.push(newCard);
  return acc;
};
