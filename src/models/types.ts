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

export type CardProps = {
  title: string;
  author: string;
  cover: string;
  stars: number;
  rating: number;
};

export type CardListProps = {
  books: CardProps[];
};

export interface InputProps {
  validationText: string | null;
  innerRef?: React.RefObject<HTMLElement>;
  innerRefs?: React.RefObject<HTMLInputElement>[];
}
