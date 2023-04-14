import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import MiniCardList from '../components/Cards/MiniCardList';
import Loader from '../components/Loader/Loader';
import Search from '../components/Search/Search';
import { API } from '../constants/api';
import { useSearchBooksQuery } from '../services/openLibraryApi';
import { RootState } from '../store';
import { MiniCard } from '../types/miniCard';
import { ResponseData } from '../types/responseData';
import './HomePage.css';

const HomePage: React.FC = () => {
  const [cards, setCards] = useState<MiniCard[]>([]);
  const storedSearchValue = useSelector((state: RootState) => state.search.searchValue);
  const { data, isError, error, isFetching } = useSearchBooksQuery(storedSearchValue);

  const transformResponse = useCallback(async (data: { docs: ResponseData[] }) => {
    const responseData = data?.docs as ResponseData[];

    const newCards: MiniCard[] = [];
    responseData?.map((card: ResponseData) => {
      const { title, author_name, first_publish_year: published, key: id } = card;
      const author = author_name?.slice(0, 2).join(', ');
      if (!title || !author || !published) return;
      const newCard = new MiniCard({ id, title, author, published });
      newCards.push(newCard);
    });

    setCards(newCards);
  }, []);

  useEffect(() => setCards([]), [storedSearchValue]);

  useEffect(() => {
    if (!data) return;
    transformResponse(data);
  }, [data, transformResponse]);

  return (
    <>
      <Search disabled={isFetching} />
      <div className="page-container">
        <h1>Books</h1>
        <em>
          Search results from&nbsp;
          <a href={`${API.OpenLibrary}`}>Open Library API</a>
        </em>
      </div>
      {isError && 'error' in error && <div className="error">{error.error}</div>}
      {isFetching && <Loader />}
      {!isFetching &&
        !isError &&
        (cards.length > 0 ? (
          <>
            <p>Search text [saved on submit]: {storedSearchValue}</p>
            <MiniCardList books={cards} />
          </>
        ) : (
          <p className="fallback-message">
            No search results for search text &quot;{storedSearchValue}&quot;. Please type new
            search query and press Enter...
          </p>
        ))}
    </>
  );
};

export default HomePage;
