import React, { useCallback, useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';

import MiniCardList from '../components/Cards/MiniCardList';
import Loader from '../components/Loader/Loader';
import Search from '../components/Search/Search';
import { API } from '../constants/constants';
import CardsContext from '../context/cardsContext';
import useAPI from '../hooks/useAPI';
import { RootState } from '../store';
import { MiniCard } from '../types/miniCard';
import { ResponseData } from '../types/responseData';
import './HomePage.css';

const HomePage: React.FC = () => {
  const cardsContext = useContext(CardsContext);
  const storedSearchValue = useSelector((state: RootState) => state.search.searchValue);
  const { cards, updateCards, updateResponseData } = cardsContext;
  const { isLoading, error, sendRequest } = useAPI();

  const transformResponse = useCallback(
    async (data: { docs: ResponseData[] }) => {
      const responseData = data.docs as ResponseData[];
      updateResponseData(responseData);

      const newCards: MiniCard[] = [];
      responseData?.map((card: ResponseData) => {
        const { title, author_name, first_publish_year: published, key: id } = card;
        const author = author_name?.slice(0, 2).join(', ');
        if (!title || !author || !published) return;
        const newCard = new MiniCard({ id, title, author, published });
        newCards.push(newCard);
      });

      updateCards(newCards);
    },
    [updateResponseData, updateCards]
  );

  const getBooks = useCallback(
    (query: string) =>
      sendRequest(
        {
          url: `${API.BooksUrl}${query}&limit=20`,
        },
        transformResponse
      ),
    [sendRequest, transformResponse]
  );

  useEffect(() => {
    getBooks(storedSearchValue);
  }, [storedSearchValue, getBooks]);

  return (
    <>
      <Search disabled={isLoading} />
      <div className="page-container">
        <h1>Books</h1>
        <em>
          Search results from&nbsp;
          <a href={`${API.OpenLibrary}`}>Open Library API</a>
        </em>
      </div>
      <div className="error">{error}</div>
      {isLoading && <Loader />}
      {!isLoading && !error && <MiniCardList books={cards} />}
      {!cards.length && !isLoading && !error && (
        <p className="fallback-message">
          No search results. Please type new search query and press Enter...
        </p>
      )}
    </>
  );
};

export default HomePage;
