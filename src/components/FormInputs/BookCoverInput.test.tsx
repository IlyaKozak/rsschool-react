import { render, screen } from '@testing-library/react';
import React from 'react';

import BookCoverInput from './BookCoverInput';

const bookCoverRefs = [React.createRef<HTMLInputElement>(), React.createRef<HTMLInputElement>()];

describe('BookCoverInput', () => {
  it('renders label with text hardcover', () => {
    render(<BookCoverInput validationText={null} innerRefs={bookCoverRefs} />);
    expect(screen.getByLabelText(/hardcover/i)).toBeInTheDocument();
  });

  it('renders label with text paperback', () => {
    render(<BookCoverInput validationText={null} innerRefs={bookCoverRefs} />);
    expect(screen.getByLabelText(/paperback/i)).toBeInTheDocument();
  });

  it('renders 2 radio input fields', () => {
    render(<BookCoverInput validationText={null} innerRefs={bookCoverRefs} />);
    expect(screen.getAllByRole('radio')).toHaveLength(2);
  });

  it('renders validation message', () => {
    render(<BookCoverInput validationText={'Not Valid'} innerRefs={bookCoverRefs} />);
    expect(screen.getByText(/not valid/i)).toBeInTheDocument();
  });

  it('renders no validation requirements, if validation message is null', () => {
    render(<BookCoverInput validationText={null} innerRefs={bookCoverRefs} />);
    expect(screen.queryByTitle('validation requirements')).not.toBeInTheDocument();
  });

  it('renders validation-text class for validation message field', () => {
    render(<BookCoverInput validationText={'Not Valid'} innerRefs={bookCoverRefs} />);
    expect(screen.getByTitle('validation requirements')).toHaveClass('validation-text');
  });
});
