export type FullCardType = {
  id: string;
  title: string | undefined;
  published: number | undefined;
  author: string | undefined;
  cover: string | undefined;
  firstSentence: string | undefined;
  pages: number | undefined;
  persons: string | undefined;
  places: string | undefined;
  rating: string | undefined;
  subject: string | undefined;
  description: string | undefined;
};

export class FullCard {
  id: string;
  title: string | undefined;
  published: number | undefined;
  author: string | undefined;
  cover: string | undefined;
  firstSentence: string | undefined;
  pages: number | undefined;
  persons: string | undefined;
  places: string | undefined;
  rating: string | undefined;
  subject: string | undefined;
  description: string | undefined;

  constructor({
    id,
    title,
    published,
    author,
    cover,
    firstSentence,
    pages,
    persons,
    places,
    rating,
    subject,
    description,
  }: FullCardType) {
    this.id = id;
    this.title = title;
    this.published = published;
    this.author = author;
    this.cover = cover;
    this.firstSentence = firstSentence;
    this.pages = pages;
    this.persons = persons;
    this.places = places;
    this.rating = rating;
    this.subject = subject;
    this.description = description;
  }
}
