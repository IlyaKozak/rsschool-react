import { render, screen } from '@testing-library/react';
import CardList from './CardList';
import { books } from '../mock/books';

describe('CardList', () => {
  it('renders heading h1', () => {
    render(<CardList books={books} />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/books/i);
  });

  it('renders heading text', () => {
    render(<CardList books={books} />);
    expect(screen.getByText(/Books/i)).toBeInTheDocument();
  });

  it('renders card list section', () => {
    render(<CardList books={books} />);
    expect(screen.getByTitle('card list')).toHaveClass('cardList');
  });

  it('renders cards', () => {
    const booksToRender = books.slice(0, 3);
    render(<CardList books={booksToRender} />);
    expect(screen.getAllByRole('article')).toHaveLength(3);
  });
});
