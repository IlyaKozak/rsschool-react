import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { searchActions } from '../../store/search-slice';
import { RootState } from '../../store';
import './Search.css';

const Search: React.FC<{ disabled: boolean }> = (props) => {
  const { disabled } = props;
  const storedSearchValue = useSelector((state: RootState) => state.search.searchValue);
  const [searchValue, setSearchValue] = useState(storedSearchValue);
  const dispatch = useDispatch();

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(searchActions.setSearchValue(searchValue));
    setSearchValue('');
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

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
