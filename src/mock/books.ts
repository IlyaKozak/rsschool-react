import { Card } from '../types/card';

export const books: Card[] = [
  {
    id: '1caca743-b1d6-4805-8d17-2369ab4adac7',
    title: 'Fahrenheit 451',
    author: 'Ray Bradbury',
    image: new URL('/src/assets/fahrenheit_451.jpg', import.meta.url).href,
    published: new Date('10-19-1953'),
    isAvailable: true,
    bookcover: 'Hardcover',
    genre: 'Fiction',
  },
  {
    id: '4f606afd-db5b-45eb-9ecf-f33ee4d06503',
    title: 'Catch-22',
    author: 'Joseph Heller',
    image: new URL('/src/assets/catch-22.jpg', import.meta.url).href,
    published: new Date('11-10-1961'),
    isAvailable: true,
    bookcover: 'Paperback',
    genre: 'Novel',
  },
  {
    id: '9e1162cd-21a6-470c-b6ce-1288c128aa05',
    title: 'Dune',
    author: 'Frank Herbert',
    image: new URL('/src/assets/dune.jpg', import.meta.url).href,
    published: new Date('08-01-1965'),
    isAvailable: false,
    bookcover: 'Hardcover',
    genre: 'Fiction',
  },
  {
    id: '41d7ba51-e4b9-436e-9e6f-9da5fa99de63',
    title: "Man's Search for Meaning",
    author: 'Viktor E. Frankl',
    image: new URL('/src/assets/search_for_meaning.jpg', import.meta.url).href,
    published: new Date('01-01-1946'),
    isAvailable: true,
    bookcover: 'Hardcover',
    genre: 'Nonfiction',
  },
];

export const booksGenres = ['Novel', 'Poetry', 'Fiction', 'Nonfiction', 'Drama', 'Prose'];

export const bookCovers = ['Hardcover', 'Paperback'];
