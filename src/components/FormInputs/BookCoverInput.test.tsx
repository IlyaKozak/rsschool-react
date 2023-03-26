import { render, screen } from '@testing-library/react';
import AuthorInput from './AuthorInput';

describe('AuthorInput', () => {
  it('renders text input field', () => {
    render(<AuthorInput validationText={null} />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('renders validation message', () => {
    render(<AuthorInput validationText={'Not Valid'} />);
    expect(screen.getByText('Not Valid')).toBeInTheDocument();
  });

  it('renders no validation requirements, if validation message is null', () => {
    render(<AuthorInput validationText={null} />);
    expect(screen.queryByTitle('validation requirements')).not.toBeInTheDocument();
  });

  it('renders no validation requirements, if validation message is null', () => {
    render(<AuthorInput validationText={'Not Valid'} />);
    expect(screen.getByTitle('validation requirements')).toHaveClass('validation-text');
  });
});
