import React, { useCallback, useEffect, useRef, useState } from 'react';

import {
  setSearchValue as setStoreSearchValue,
  setInitialSearchInput,
} from '../../store/searchSlice';
import { RootState } from '../../store';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import './Search.css';

const Search: React.FC<{ disabled: boolean }> = (props) => {
  const { disabled } = props;
  const storedSearchValue = useAppSelector((state: RootState) => state.search.searchValue);
  const initialSearchInput = useAppSelector((state: RootState) => state.search.initialSearchInput);
  const [searchValue, setSearchValue] = useState(initialSearchInput);
  const searchValueRef = useRef('');
  const dispatch = useAppDispatch();

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(setStoreSearchValue(searchValue));
    searchValueRef.current = '';
    setSearchValue('');
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchValue = event.target.value;
    searchValueRef.current = newSearchValue;
    setSearchValue(newSearchValue);
  };

  const setValueOnCleanup = useCallback(() => {
    if (storedSearchValue !== searchValueRef.current) {
      dispatch(setInitialSearchInput(searchValue));
    }
  }, [storedSearchValue, dispatch, searchValue]);

  useEffect(() => {
    return setValueOnCleanup;
  }, [setValueOnCleanup]);

  return (
    <form className="search" onSubmit={submitHandler}>
      <input
        type="search"
        placeholder="&#128269; Search here … Press Enter"
        value={searchValue}
        onChange={onChange}
        disabled={disabled}
      />
    </form>
  );
};

export default Search;
