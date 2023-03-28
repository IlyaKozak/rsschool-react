import React from 'react';

import CardList from '../components/Cards/CardList';
import Search from '../components/Search/Search';
import { books } from '../mock/books';

const HomePage: React.FC = () => {
  return (
    <>
      <Search />
      <h1>Books</h1>
      <CardList books={books} />
    </>
  );
};

export default HomePage;
