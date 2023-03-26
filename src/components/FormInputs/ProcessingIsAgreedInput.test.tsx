import { render, screen } from '@testing-library/react';
import ProcessingIsAgreedInput from './ProcessingIsAgreedInput';

describe('PublishedDateInput', () => {
  it('renders label with text agree', () => {
    render(<ProcessingIsAgreedInput validationText={null} />);
    expect(screen.getByLabelText(/agree/i)).toBeInTheDocument();
  });

  it('renders checkbox input field', () => {
    render(<ProcessingIsAgreedInput validationText={null} />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('renders validation message', () => {
    render(<ProcessingIsAgreedInput validationText={'Not Valid'} />);
    expect(screen.getByText(/not valid/i)).toBeInTheDocument();
  });

  it('renders no validation requirements, if validation message is null', () => {
    render(<ProcessingIsAgreedInput validationText={null} />);
    expect(screen.queryByTitle('validation requirements')).not.toBeInTheDocument();
  });

  it('renders validation-text class for validation message field', () => {
    render(<ProcessingIsAgreedInput validationText={'Not Valid'} />);
    expect(screen.getByTitle('validation requirements')).toHaveClass('validation-text');
  });
});
