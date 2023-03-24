import { CardProps } from '../models/types';

export const books: CardProps[] = [
  {
    title: 'Fahrenheit 451',
    author: 'Ray Bradbury',
    image: 'fahrenheit_451.jpg',
    published: new Date('19-10-1953'),
    isAvailable: true,
    bookcover: 'Hardcover',
    genre: 'Fiction',
    stars: 4.6,
    rating: 42_074,
  },
  {
    title: 'Catch-22',
    author: 'Joseph Heller',
    image: 'catch-22.jpg',
    published: new Date('10-11-1961'),
    isAvailable: true,
    bookcover: 'Paperback',
    genre: 'Novel',
    stars: 4.4,
    rating: 11_629,
  },
  {
    title: 'Dune',
    author: 'Frank Herbert',
    image: 'dune.jpg',
    published: new Date('01-08-1965'),
    isAvailable: false,
    bookcover: 'Hardcover',
    genre: 'Fiction',
    stars: 4.7,
    rating: 72_228,
  },
  {
    title: "Man's Search for Meaning",
    author: 'Viktor E. Frankl',
    image: 'search_for_meaning.jpg',
    published: new Date('01-01-1946'),
    isAvailable: true,
    bookcover: 'Hardcover',
    genre: 'Nonfiction',
    stars: 4.7,
    rating: 62_559,
  },
];

export const booksGenres = ['Novel', 'Poetry', 'Fiction', 'Nonfiction', 'Drama', 'Prose'];
