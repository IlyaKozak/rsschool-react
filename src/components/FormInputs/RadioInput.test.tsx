import { render, screen } from '@testing-library/react';

import { bookCovers } from '../../mock/books';
import RadioInput from './RadioInput';

describe('RadioInput (bookCover)', () => {
  it('renders label with text hardcover', () => {
    render(<RadioInput items={bookCovers} />);
    expect(screen.getByLabelText(/hardcover/i)).toBeInTheDocument();
  });

  it('renders label with text paperback', () => {
    render(<RadioInput items={bookCovers} />);
    expect(screen.getByLabelText(/paperback/i)).toBeInTheDocument();
  });

  it('renders 2 radio input fields', () => {
    render(<RadioInput items={bookCovers} />);
    expect(screen.getAllByRole('radio')).toHaveLength(2);
  });

  it('renders validation message', () => {
    render(<RadioInput validationText={'Not Valid'} />);
    expect(screen.getByText(/not valid/i)).toBeInTheDocument();
  });

  it('renders no validation requirements, if validation message is null', () => {
    render(<RadioInput />);
    expect(screen.queryByTitle('validation requirements')).not.toBeInTheDocument();
  });

  it('renders validation-text class for validation message field', () => {
    render(<RadioInput validationText={'Not Valid'} />);
    expect(screen.getByTitle('validation requirements')).toHaveClass('validation-text');
  });
});
