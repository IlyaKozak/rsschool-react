export type MiniCardType = {
  id: string;
  title: string;
  author: string;
  published: number;
};

export class MiniCard {
  id: string;
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

export type MiniCardItemProps = MiniCard & {
  onClick: (id: string) => void;
};

export type MiniCardListProps = {
  books: MiniCard[];
};
