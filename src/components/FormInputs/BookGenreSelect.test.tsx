import { render, screen } from '@testing-library/react';

import { booksGenres } from '../../mock/books';
import BookGenreSelect from './BookGenreSelect';

describe('BookGenreSelect', () => {
  it('renders label with text genre', () => {
    render(<BookGenreSelect validationText={null} />);
    expect(screen.getByLabelText(/genre/i)).toBeInTheDocument();
  });

  it('renders select', () => {
    render(<BookGenreSelect validationText={null} />);
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  it('renders select options fields & one default', () => {
    render(<BookGenreSelect validationText={null} />);
    expect(screen.getAllByRole('option')).toHaveLength(booksGenres.length + 1);
  });

  it('renders validation message', () => {
    render(<BookGenreSelect validationText={'Not Valid'} />);
    expect(screen.getByText(/not valid/i)).toBeInTheDocument();
  });

  it('renders no validation requirements, if validation message is null', () => {
    render(<BookGenreSelect validationText={null} />);
    expect(screen.queryByTitle('validation requirements')).not.toBeInTheDocument();
  });

  it('renders validation-text class for validation message field', () => {
    render(<BookGenreSelect validationText={'Not Valid'} />);
    expect(screen.getByTitle('validation requirements')).toHaveClass('validation-text');
  });
});
