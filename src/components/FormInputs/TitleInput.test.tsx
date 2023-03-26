import { render, screen } from '@testing-library/react';
import TitleInput from './TitleInput';

describe('TitleInput', () => {
  it('renders label with text title', () => {
    render(<TitleInput validationText={null} />);
    expect(screen.getByLabelText(/title/i)).toBeInTheDocument();
  });

  it('renders text input field', () => {
    render(<TitleInput validationText={null} />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('renders validation message', () => {
    render(<TitleInput validationText={'Not Valid'} />);
    expect(screen.getByText(/not valid/i)).toBeInTheDocument();
  });

  it('renders no validation requirements, if validation message is null', () => {
    render(<TitleInput validationText={null} />);
    expect(screen.queryByTitle('validation requirements')).not.toBeInTheDocument();
  });

  it('renders validation-text class for validation message field', () => {
    render(<TitleInput validationText={'Not Valid'} />);
    expect(screen.getByTitle('validation requirements')).toHaveClass('validation-text');
  });
});
