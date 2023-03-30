import { render, screen } from '@testing-library/react';

import TextInput from './TextInput';

describe('AuthorInput', () => {
  it('renders label with text author', () => {
    render(<TextInput validationText={null} name={'author'} />);
    expect(screen.getByLabelText(/author/i)).toBeInTheDocument();
  });

  it('renders text input field', () => {
    render(<TextInput validationText={null} />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('renders validation message', () => {
    render(<TextInput validationText={'Not Valid'} />);
    expect(screen.getByText(/not valid/i)).toBeInTheDocument();
  });

  it('renders no validation requirements, if validation message is null', () => {
    render(<TextInput validationText={null} />);
    expect(screen.queryByTitle('validation requirements')).not.toBeInTheDocument();
  });

  it('renders validation-text class for validation message field', () => {
    render(<TextInput validationText={'Not Valid'} />);
    expect(screen.getByTitle('validation requirements')).toHaveClass('validation-text');
  });
});

describe('TitleInput', () => {
  it('renders label with text title', () => {
    render(<TextInput validationText={null} name={'title'} />);
    expect(screen.getByLabelText(/title/i)).toBeInTheDocument();
  });

  it('renders text input field', () => {
    render(<TextInput validationText={null} />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('renders validation message', () => {
    render(<TextInput validationText={'Not Valid'} />);
    expect(screen.getByText(/not valid/i)).toBeInTheDocument();
  });

  it('renders no validation requirements, if validation message is null', () => {
    render(<TextInput validationText={null} />);
    expect(screen.queryByTitle('validation requirements')).not.toBeInTheDocument();
  });

  it('renders validation-text class for validation message field', () => {
    render(<TextInput validationText={'Not Valid'} />);
    expect(screen.getByTitle('validation requirements')).toHaveClass('validation-text');
  });
});
