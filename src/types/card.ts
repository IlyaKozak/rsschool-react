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
  published: string;
  isAvailable: boolean;
  bookcover: string;
  genre: string;

  constructor({ title, author, image, published, isAvailable, bookcover, genre }: CardType) {
    this.id = String(Math.floor(Math.random() * Date.now()));
    this.title = title;
    this.author = author;
    this.image = image;
    this.published = published.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
    this.isAvailable = isAvailable;
    this.bookcover = bookcover;
    this.genre = genre;
  }
}

export type CardListProps = {
  books: Card[];
};
