import React from 'react';
import CardList from '../components/CardList';
import Search from '../components/Search';
import { books } from '../mock/books';

class HomePage extends React.Component {
  render() {
    return (
      <>
        <Search />
        <CardList books={books} />
      </>
    );
  }
}

export default HomePage;
