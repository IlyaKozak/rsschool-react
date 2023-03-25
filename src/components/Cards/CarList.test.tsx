import { render, screen } from '@testing-library/react';
import CardList from './CardList';
import { books } from '../../mock/books';

describe('CardList', () => {
  it('renders heading h1', () => {
    render(<CardList books={books} />);
    expect(screen.getByTitle('card list')).toBeInTheDocument();
  });

  it('renders card list section with class cardList', () => {
    render(<CardList books={books} />);
    expect(screen.getByTitle('card list')).toHaveClass('cardList');
  });

  it('renders cards', () => {
    const booksToRender = books.slice(0, 3);
    render(<CardList books={booksToRender} />);
    expect(screen.getAllByRole('article')).toHaveLength(3);
  });
});
