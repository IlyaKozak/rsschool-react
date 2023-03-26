import { render, screen } from '@testing-library/react';
import PublishedDateInput from './PublishedDateInput';

describe('PublishedDateInput', () => {
  it('renders label published', () => {
    render(<PublishedDateInput validationText={null} />);
    expect(screen.getByLabelText(/published/i)).toBeInTheDocument();
  });

  it('renders validation message', () => {
    render(<PublishedDateInput validationText={'Not Valid'} />);
    expect(screen.getByText(/not valid/i)).toBeInTheDocument();
  });

  it('renders no validation requirements, if validation message is null', () => {
    render(<PublishedDateInput validationText={null} />);
    expect(screen.queryByTitle('validation requirements')).not.toBeInTheDocument();
  });

  it('renders validation-text class for validation message field', () => {
    render(<PublishedDateInput validationText={'Not Valid'} />);
    expect(screen.getByTitle('validation requirements')).toHaveClass('validation-text');
  });
});
