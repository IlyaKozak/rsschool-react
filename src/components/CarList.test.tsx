import { render, screen } from '@testing-library/react';
import CardList from './CardList';
import { books } from '../mock/books';

describe('CardList', () => {
  it('Renders heading h1', () => {
    render(<CardList books={books} />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/books/i);
    expect(screen.getByText(/Books/i)).toBeInTheDocument();
  });
});
