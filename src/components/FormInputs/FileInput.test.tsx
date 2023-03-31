import { render, screen } from '@testing-library/react';

import FileInput from './FileInput';

describe('FileInput', () => {
  it('renders label with text image', () => {
    render(<FileInput text={'Image'} />);
    expect(screen.getByLabelText(/image/i)).toBeInTheDocument();
  });

  it('renders validation message', () => {
    render(<FileInput validationText={'Not Valid'} />);
    expect(screen.getByText(/not valid/i)).toBeInTheDocument();
  });

  it('renders no validation requirements, if validation message is null', () => {
    render(<FileInput />);
    expect(screen.queryByTitle('validation requirements')).not.toBeInTheDocument();
  });

  it('renders validation-text class for validation message field', () => {
    render(<FileInput validationText={'Not Valid'} />);
    expect(screen.getByTitle('validation requirements')).toHaveClass('validation-text');
  });
});
