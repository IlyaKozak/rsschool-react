import { render, screen } from '@testing-library/react';

import { booksGenres } from '../../mock/books';
import SelectInput from './SelectInput';

describe('SelectInput (bookGenre)', () => {
  it('renders label with text genre', () => {
    render(<SelectInput text={'genre'} />);
    expect(screen.getByLabelText(/genre/i)).toBeInTheDocument();
  });

  it('renders select', () => {
    render(<SelectInput />);
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  it('renders select options fields & one default', () => {
    render(<SelectInput items={booksGenres} />);
    expect(screen.getAllByRole('option')).toHaveLength(booksGenres.length + 1);
  });

  it('renders validation message', () => {
    render(<SelectInput validationText={'Not Valid'} />);
    expect(screen.getByText(/not valid/i)).toBeInTheDocument();
  });

  it('renders no validation requirements, if validation message is null', () => {
    render(<SelectInput />);
    expect(screen.queryByTitle('validation requirements')).not.toBeInTheDocument();
  });

  it('renders validation-text class for validation message field', () => {
    render(<SelectInput validationText={'Not Valid'} />);
    expect(screen.getByTitle('validation requirements')).toHaveClass('validation-text');
  });
});
