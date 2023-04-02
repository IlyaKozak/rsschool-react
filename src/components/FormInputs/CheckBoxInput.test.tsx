import { render, screen } from '@testing-library/react';

import CheckBoxInput from './CheckBoxInput';

describe('CheckBoxInput (isAgreed)', () => {
  it('renders label with text agree', () => {
    render(<CheckBoxInput validationText={null} text={'agree'} />);
    expect(screen.getByLabelText(/agree/i)).toBeInTheDocument();
  });

  it('renders checkbox input field', () => {
    render(<CheckBoxInput validationText={null} />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('renders validation message', () => {
    render(<CheckBoxInput validationText={'Not Valid'} />);
    expect(screen.getByText(/not valid/i)).toBeInTheDocument();
  });

  it('renders no validation requirements, if validation message is null', () => {
    render(<CheckBoxInput validationText={null} />);
    expect(screen.queryByTitle('validation requirements')).not.toBeInTheDocument();
  });

  it('renders validation-text class for validation message field', () => {
    render(<CheckBoxInput validationText={'Not Valid'} />);
    expect(screen.getByTitle('validation requirements')).toHaveClass('validation-text');
  });
});

describe('CheckBoxInput (isAvailable)', () => {
  it('renders label with text available', () => {
    render(<CheckBoxInput validationText={null} text={'available'} />);
    expect(screen.getByLabelText(/available/i)).toBeInTheDocument();
  });

  it('renders checkbox input field', () => {
    render(<CheckBoxInput validationText={null} />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('renders validation message', () => {
    render(<CheckBoxInput validationText={'Not Valid'} />);
    expect(screen.getByText(/not valid/i)).toBeInTheDocument();
  });

  it('renders no validation requirements, if validation message is null', () => {
    render(<CheckBoxInput validationText={null} />);
    expect(screen.queryByTitle('validation requirements')).not.toBeInTheDocument();
  });

  it('renders validation-text class for validation message field', () => {
    render(<CheckBoxInput validationText={'Not Valid'} />);
    expect(screen.getByTitle('validation requirements')).toHaveClass('validation-text');
  });
});
