import React, { useCallback, useEffect, useState } from 'react';

import MiniCardList from '../components/Cards/MiniCardList';
import Loader from '../components/Loader/Loader';
import Search from '../components/Search/Search';
import { OPEN_LIBRARY_API } from '../constants/api';
import { useAppSelector } from '../hooks/hooks';
import { useSearchBooksQuery } from '../services/openLibraryApi';
import { RootState } from '../store';
import { MiniCard } from '../types/miniCard';
import { ResponseData } from '../types/responseData';
import { responseDataToCards } from '../utils/dataResponseToCards';
import './HomePage.css';

const HomePage: React.FC = () => {
  const storedSearchValue = useAppSelector((state: RootState) => state.search.searchValue);
  const { data, isError, error, isFetching } = useSearchBooksQuery(storedSearchValue);
  const miniCards = (data?.docs ?? []).reduce(responseDataToCards, []);
  const [cards, setCards] = useState<MiniCard[]>(miniCards ?? []);

  const transformResponse = useCallback(async (data: { docs: ResponseData[] }) => {
    const responseData = data?.docs as ResponseData[];
    const newCards: MiniCard[] = responseData?.reduce(responseDataToCards, []);
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
          <a href={`${OPEN_LIBRARY_API.docs}`}>Open Library API</a>
        </em>
      </div>
      {isError && 'error' in error && <div className="error">{error.error}</div>}
      {isFetching && <Loader />}
      {!isFetching &&
        !isError &&
        (cards.length > 0 ? (
          <>
            <p>Search text: {storedSearchValue}</p>
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
