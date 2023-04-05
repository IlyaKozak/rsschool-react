import React, { useContext, useState } from 'react';

import MiniCardList from '../components/Cards/MiniCardList';
import Loader from '../components/Loader/Loader';
import Search from '../components/Search/Search';
import CardsContext from '../context/cardsContext';
import { CardResponse, MiniCard } from '../models/types';
import filterByRequiredFields from '../utils/filterByRequiredFields';
import filterByUniqueField from '../utils/filterByUniqueField';
import './HomePage.css';

const HomePage: React.FC = () => {
  const cardsContext = useContext(CardsContext);
  const [isLoading, setLoading] = useState(false);
  const { cards } = cardsContext;

  const searchEventHandler = async (searchValue: string) => {
    setLoading(true);
    const response = await fetch(`https://openlibrary.org/search.json?q=${searchValue}&limit=20`);
    const data = await response.json();
    setLoading(false);
    const newCards: MiniCard[] = [];
    const cards = filterByRequiredFields(
      filterByUniqueField(data.docs as Array<CardResponse>, '_version_'),
      ['title', 'first_publish_year']
    );

    cards?.map((card: CardResponse) => {
      const { title, author_name, first_publish_year: published, _version_: id } = card;
      const author = author_name?.slice(0, 2).join(', ');
      if (!title || !author || !published) return;
      const newCard = new MiniCard({ id, title, author, published });
      newCards.push(newCard);
    });
    cardsContext.addCardsHandler(newCards);
  };

  return (
    <>
      <Search onSearch={searchEventHandler} />
      <div className="page-container">
        <h1>Books</h1>
        <em>
          Search results from&nbsp;
          <a href="https://openlibrary.org/dev/docs/api/search">Open Library API</a>
        </em>
      </div>
      {isLoading && <Loader />}
      {!isLoading && <MiniCardList books={cards} />}
      {!cards.length && !isLoading && (
        <p>No search results. Please type search query and press Enter...</p>
      )}
    </>
  );
};

export default HomePage;
