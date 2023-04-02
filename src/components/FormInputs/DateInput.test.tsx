import { render, screen } from '@testing-library/react';

import DateInput from './DateInput';

describe('DateInput', () => {
  it('renders label published', () => {
    render(<DateInput validationText={null} name={'published'} />);
    expect(screen.getByLabelText(/published/i)).toBeInTheDocument();
  });

  it('renders validation message', () => {
    render(<DateInput validationText={'Not Valid'} />);
    expect(screen.getByText(/not valid/i)).toBeInTheDocument();
  });

  it('renders no validation requirements, if validation message is null', () => {
    render(<DateInput validationText={null} />);
    expect(screen.queryByTitle('validation requirements')).not.toBeInTheDocument();
  });

  it('renders validation-text class for validation message field', () => {
    render(<DateInput validationText={'Not Valid'} />);
    expect(screen.getByTitle('validation requirements')).toHaveClass('validation-text');
  });
});
