import { ChangeHandler } from 'react-hook-form';

export type CardType = {
  title: string;
  author: string;
  image: string;
  published: Date;
  isAvailable: boolean;
  bookcover: string;
  genre: string;
};

export class Card {
  id: string;
  title: string;
  author: string;
  image: string;
  published: Date;
  isAvailable: boolean;
  bookcover: string;
  genre: string;

  constructor({ title, author, image, published, isAvailable, bookcover, genre }: CardType) {
    this.id = String(Math.floor(Math.random() * Date.now()));
    this.title = title;
    this.author = author;
    this.image = image;
    this.published = published;
    this.isAvailable = isAvailable;
    this.bookcover = bookcover;
    this.genre = genre;
  }
}

export type MiniCardType = {
  id: number;
  title: string;
  author: string;
  published: number;
};

export class MiniCard {
  id: number;
  title: string;
  author: string;
  published: number;

  constructor({ id, title, author, published }: MiniCardType) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.published = published;
  }
}

export type CardListProps = {
  books: Card[];
};

export type MiniCardListProps = {
  books: MiniCard[];
};

export interface InputProps {
  text?: string;
  validationText: string;
  items?: string[];
  name: string;
  forwardRef: React.Ref<HTMLElement>;
  onChange: ChangeHandler;
  onBlur: ChangeHandler;
}

export interface SearchProps {
  onSearch: (searchValue: string) => void;
}

export type FormProps = {
  onCardAdd: (card: Card) => void;
};

export interface ICardsContext {
  cards: MiniCard[];
  addCardsHandler: (cards: MiniCard[]) => void;
}

export type CardResponse = {
  _version_: number;
  title: string;
  first_publish_year: number;
  author_name?: string[];
};
