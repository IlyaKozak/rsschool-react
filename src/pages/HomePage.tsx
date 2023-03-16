import React from 'react';
import CardList from '../components/CardList';
import { books } from '../mock/books';

class HomePage extends React.Component {
  render() {
    return (
      <>
        <CardList books={books} />
      </>
    );
  }
}

export default HomePage;
