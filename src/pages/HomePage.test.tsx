// import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';

// import HomePage from '../pages/HomePage';

// describe('HomePage', () => {
  // it('renders loader after entering search query', async () => {
  //   const user = userEvent.setup();

  //   render(<HomePage />);
  //   const search = screen.getByPlaceholderText(/search/i);
  //   user.type(search, 'harry{enter}');
  //   expect(await screen.findByTestId('loader')).toBeInTheDocument();
  // });

  // it('removes loader after loading complete', async () => {
  //   const user = userEvent.setup();

  //   render(<HomePage />);
  //   const search = screen.getByPlaceholderText(/search/i);
  //   user.type(search, 'harry{enter}');

  //   await waitForElementToBeRemoved(await screen.findByTestId('loader'));
  // });

  // it('renders cards returns by API', async () => {
  //   const user = userEvent.setup();

  //   render(
  //     <CardsProvider>
  //       <HomePage />
  //     </CardsProvider>
  //   );
  //   const search = screen.getByPlaceholderText(/search/i);
  //   user.type(search, 'harry{enter}');

  //   expect(await screen.findAllByText(/harry/i)).toBeInTheDocument();
  //   screen.debug();
  // await waitForElementToBeRemoved(screen.queryByText(/no search results/i));
  // await waitForElementToBeRemoved(await screen.findByTestId('loader'));

  // await waitFor(() => {
  //   // screen.debug();
  //   expect(screen.getByTestId('loader')).toBeInTheDocument();
  // });

  // await waitFor(() => {
  //   // screen.debug();
  //   expect(screen.queryByText(/harry/i)).toBeInTheDocument();
  // });
  // screen.debug();
  // expect(await screen.findByTestId('loader')).toBeInTheDocument();
  // });

  // it('loader disappears after entering search query', async () => {
  //   const user = userEvent.setup();

  //   render(<HomePage />);
  //   const search = screen.getByPlaceholderText(/search/i);
  //   user.type(search, 'harry{enter}');
  //   // expect(await screen.findAllByText(/harry/i)).toBeInTheDocument();

  //   await waitFor(() => {
  //     screen.debug();
  //   });

  //   await waitFor(() => {
  //     screen.debug();
  //     expect(screen.queryByText(/harry/i)).toBeInTheDocument();
  //   });
  // });
// });
