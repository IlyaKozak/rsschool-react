import React, { useCallback, useEffect, useRef, useState } from 'react';

import { searchValueKey } from '../../constants/constants';
import withStorage, { WithStorageProps } from '../../hoc/withStorage';
import { SearchProps } from '../../types/form';
import './Search.css';

const Search: React.FC<SearchProps & WithStorageProps> = (props) => {
  const { getValue, setValue, onSearch } = props;
  const storedSearchValue = getValue() ?? '';
  const [searchValue, setSearchValue] = useState(storedSearchValue);
  const searchValueRef = useRef('');

  const updateInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const setValueOnCleanup = useCallback(() => {
    if (storedSearchValue !== searchValueRef.current) {
      setValue(searchValueRef.current);
    }
  }, [storedSearchValue, setValue]);

  useEffect(() => {
    searchValueRef.current = searchValue;
  }, [searchValue]);

  useEffect(() => {
    return setValueOnCleanup;
  }, [setValueOnCleanup]);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    onSearch(searchValueRef.current);
    setSearchValue('');
  };

  return (
    <form className="search" onSubmit={submitHandler}>
      <input
        type="search"
        placeholder="&#128269; Search here … Press Enter"
        value={searchValue}
        onChange={updateInputValue}
      />
    </form>
  );
};

export default withStorage(Search, localStorage, searchValueKey);
