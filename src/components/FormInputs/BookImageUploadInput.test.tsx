import { render, screen } from '@testing-library/react';

import BookImageUploadInput from './BookImageUploadInput';

describe('BookImageUploadInput', () => {
  it('renders label with text image', () => {
    render(<BookImageUploadInput validationText={null} />);
    expect(screen.getByLabelText(/image/i)).toBeInTheDocument();
  });

  it('renders validation message', () => {
    render(<BookImageUploadInput validationText={'Not Valid'} />);
    expect(screen.getByText(/not valid/i)).toBeInTheDocument();
  });

  it('renders no validation requirements, if validation message is null', () => {
    render(<BookImageUploadInput validationText={null} />);
    expect(screen.queryByTitle('validation requirements')).not.toBeInTheDocument();
  });

  it('renders validation-text class for validation message field', () => {
    render(<BookImageUploadInput validationText={'Not Valid'} />);
    expect(screen.getByTitle('validation requirements')).toHaveClass('validation-text');
  });
});
