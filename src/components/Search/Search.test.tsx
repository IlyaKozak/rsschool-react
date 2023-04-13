import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import Search from './Search';
import store from '../../store';

describe('Search', () => {
  it('renders search input with placeholder search text', async () => {
    render(
      <Provider store={store}>
        <Search disabled={false} />
      </Provider>
    );
    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
  });
});
