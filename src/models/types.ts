export type FormInputs = {
  formRef: React.RefObject<HTMLFormElement>;
  authorRef: React.RefObject<HTMLInputElement>;
  titleRef: React.RefObject<HTMLInputElement>;
  publishedDateRef: React.RefObject<HTMLInputElement>;
  bookGenreRef: React.RefObject<HTMLSelectElement>;
  bookCoverRefs: React.RefObject<HTMLInputElement>[];
  bookIsAvailableRef: React.RefObject<HTMLInputElement>;
  processingIsAgreedRef: React.RefObject<HTMLInputElement>;
  bookImageRef: React.RefObject<HTMLInputElement>;
};

export type CardType = {
  id: string;
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

export type CardListProps = {
  books: Card[];
};

export interface InputProps {
  validationText: string | null;
  innerRef?: React.RefObject<HTMLElement>;
  innerRefs?: React.RefObject<HTMLInputElement>[];
}
