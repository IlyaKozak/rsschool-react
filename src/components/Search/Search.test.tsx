import { screen } from '@testing-library/react';

import { renderWithProviders } from '../../utils/testUtils';
import Search from './Search';

describe('Search', () => {
  it('renders search input with placeholder search text', async () => {
    renderWithProviders(<Search disabled={false} />);
    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
  });
});
