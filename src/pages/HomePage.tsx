import React, { useContext } from 'react';

import CardList from '../components/Cards/CardList';
import Search from '../components/Search/Search';
import CardsContext from '../context/cardsContext';

const HomePage: React.FC = () => {
  const cardsContext = useContext(CardsContext);
  const { cards } = cardsContext;

  return (
    <>
      <Search />
      <h1>Books</h1>
      <CardList books={[...cards]} />
    </>
  );
};

export default HomePage;
