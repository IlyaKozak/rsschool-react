import { render, screen } from '@testing-library/react';
import Card from './Card';
import { books } from '../mock/books';

describe('Card', () => {
  it('renders heading h3 - card title', () => {
    render(<Card {...books[0]} />);
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(books[0].title);
  });

  it('renders card with class card', () => {
    render(<Card {...books[0]} />);
    expect(screen.getByRole('article')).toHaveClass('card');
  });

  it('renders card author', () => {
    render(<Card {...books[0]} />);
    expect(screen.getByTitle('author')).toHaveTextContent(books[0].author);
  });
});
