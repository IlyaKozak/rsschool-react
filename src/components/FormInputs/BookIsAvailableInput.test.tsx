import { render, screen } from '@testing-library/react';
import BookIsAvailableInput from './BookIsAvailableInput';

describe('BookIsAvailableInput', () => {
  it('renders label with text available', () => {
    render(<BookIsAvailableInput validationText={null} />);
    expect(screen.getByLabelText(/available/i)).toBeInTheDocument();
  });

  it('renders checkbox input field', () => {
    render(<BookIsAvailableInput validationText={null} />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('renders validation message', () => {
    render(<BookIsAvailableInput validationText={'Not Valid'} />);
    expect(screen.getByText(/not valid/i)).toBeInTheDocument();
  });

  it('renders no validation requirements, if validation message is null', () => {
    render(<BookIsAvailableInput validationText={null} />);
    expect(screen.queryByTitle('validation requirements')).not.toBeInTheDocument();
  });

  it('renders validation-text class for validation message field', () => {
    render(<BookIsAvailableInput validationText={'Not Valid'} />);
    expect(screen.getByTitle('validation requirements')).toHaveClass('validation-text');
  });
});
