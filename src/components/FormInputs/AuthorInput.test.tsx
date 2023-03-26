import { render, screen } from '@testing-library/react';
import AuthorInput from './AuthorInput';

describe('AuthorInput', () => {
  it('renders label with text author', () => {
    render(<AuthorInput validationText={null} />);
    expect(screen.getByLabelText(/author/i)).toBeInTheDocument();
  });

  it('renders text input field', () => {
    render(<AuthorInput validationText={null} />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('renders validation message', () => {
    render(<AuthorInput validationText={'Not Valid'} />);
    expect(screen.getByText(/not valid/i)).toBeInTheDocument();
  });

  it('renders no validation requirements, if validation message is null', () => {
    render(<AuthorInput validationText={null} />);
    expect(screen.queryByTitle('validation requirements')).not.toBeInTheDocument();
  });

  it('renders validation-text class for validation message field', () => {
    render(<AuthorInput validationText={'Not Valid'} />);
    expect(screen.getByTitle('validation requirements')).toHaveClass('validation-text');
  });
});
