import { render, screen } from '@testing-library/react';

import Search from './Search';

describe('Search', () => {
  it('renders search input with placeholder search text', async () => {
    render(<Search onSearch={() => {}} />);
    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
  });
});
