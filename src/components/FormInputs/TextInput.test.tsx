import { render, screen } from '@testing-library/react';

import TextInput from './TextInput';

describe('TextInput (author)', () => {
  it('renders label with text author', () => {
    render(<TextInput name={'author'} />);
    expect(screen.getByLabelText(/author/i)).toBeInTheDocument();
  });

  it('renders text input field', () => {
    render(<TextInput />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('renders validation message', () => {
    render(<TextInput validationText={'Not Valid'} />);
    expect(screen.getByText(/not valid/i)).toBeInTheDocument();
  });

  it('renders no validation requirements, if validation message is null', () => {
    render(<TextInput />);
    expect(screen.queryByTitle('validation requirements')).not.toBeInTheDocument();
  });

  it('renders validation-text class for validation message field', () => {
    render(<TextInput validationText={'Not Valid'} />);
    expect(screen.getByTitle('validation requirements')).toHaveClass('validation-text');
  });
});

describe('TextInput (title)', () => {
  it('renders label with text title', () => {
    render(<TextInput name={'title'} />);
    expect(screen.getByLabelText(/title/i)).toBeInTheDocument();
  });

  it('renders text input field', () => {
    render(<TextInput />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('renders validation message', () => {
    render(<TextInput validationText={'Not Valid'} />);
    expect(screen.getByText(/not valid/i)).toBeInTheDocument();
  });

  it('renders no validation requirements, if validation message is null', () => {
    render(<TextInput />);
    expect(screen.queryByTitle('validation requirements')).not.toBeInTheDocument();
  });

  it('renders validation-text class for validation message field', () => {
    render(<TextInput validationText={'Not Valid'} />);
    expect(screen.getByTitle('validation requirements')).toHaveClass('validation-text');
  });
});
