import React, { useCallback, useContext, useEffect, useState } from 'react';

import MiniCardList from '../components/Cards/MiniCardList';
import Loader from '../components/Loader/Loader';
import Search from '../components/Search/Search';
import { API, searchValueKey } from '../constants/constants';
import CardsContext from '../context/cardsContext';
import useAPI from '../hooks/useAPI';
import { callbackType } from '../types/api';
import { MiniCard } from '../types/miniCard';
import { ResponseData } from '../types/responseData';
import './HomePage.css';

const HomePage: React.FC = () => {
  const cardsContext = useContext(CardsContext);
  const { cards, updateCards, updateResponseData } = cardsContext;
  const [searchValue, setSearchValue] = useState(localStorage.getItem(searchValueKey) ?? '');
  const { isLoading, error, sendRequest } = useAPI();

  const transformResponse: callbackType = useCallback(
    async (data) => {
      const responseData = data.docs as ResponseData[];
      updateResponseData(responseData);

      const newCards: MiniCard[] = [];
      responseData?.map((card: ResponseData) => {
        const { title, author_name, first_publish_year: published, _version_: id } = card;
        const author = author_name?.slice(0, 2).join(', ');
        if (!title || !author || !published) return;
        const newCard = new MiniCard({ id, title, author, published });
        newCards.push(newCard);
      });

      updateCards(newCards);
    },
    [updateResponseData, updateCards]
  );

  const onSearchHandler = (searchValue: string) => {
    setSearchValue(searchValue);
  };

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
    if (!searchValue) return;
    getBooks(searchValue);
  }, [searchValue, getBooks]);

  return (
    <>
      <Search onSearch={onSearchHandler} />
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
        <p>No search results. Please type search query and press Enter...</p>
      )}
    </>
  );
};

export default HomePage;
