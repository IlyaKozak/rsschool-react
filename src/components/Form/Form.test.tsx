import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

import { booksGenres } from '../../mock/books';
import Form from './Form';

describe('Form', () => {
  it('renders success modal if all provided data is valid', async () => {
    URL.createObjectURL = vi.fn().mockReturnValue('your-mock-url');
    let portalRoot = document.getElementById('portal');
    if (!portalRoot) {
      portalRoot = document.createElement('div');
      portalRoot.setAttribute('id', 'portal');
      document.body.appendChild(portalRoot);
    }
    const user = userEvent.setup();

    render(<Form onCardAdd={vi.fn()} />);

    const authorInput = screen.getByRole('textbox', { name: /author/i });
    await user.type(authorInput, 'Author');
    const titleInput = screen.getByRole('textbox', { name: /title/i });
    await user.type(titleInput, 'Title');
    const agreeCheckbox = screen.getByRole('checkbox', {
      name: 'I agree to the processing of provided data',
    });
    await user.click(agreeCheckbox);
    const hardCoverRadioBtn = screen.getByRole('radio', { name: 'Hardcover' });
    await userEvent.click(hardCoverRadioBtn);
    const BookGenreSelect = screen.getByRole('combobox');
    await user.selectOptions(BookGenreSelect, booksGenres[0]);
    const PublishedDateInput = screen.getByTestId('published');
    await user.type(PublishedDateInput, '2000-01-01');

    const file = new File(['foo'], `foo.jpg`, {
      type: 'image/jpg',
    });
    const bookCoverInput = screen.getByTestId('image');
    await user.upload(bookCoverInput, file);

    const submitBtn = screen.getByRole('button');
    await user.click(submitBtn);
    expect(screen.queryByText(/the card is created/i)).toBeInTheDocument();
  });

  it('renders no success modal if some provided data is not valid', async () => {
    const user = userEvent.setup();

    render(<Form onCardAdd={vi.fn()} />);

    const submitBtn = screen.getByRole('button');
    await user.click(submitBtn);
    expect(screen.queryByText(/the card is created/i)).not.toBeInTheDocument();
  });
});
