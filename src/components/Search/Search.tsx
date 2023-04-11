import React, { useState } from 'react';

import { searchValueKey } from '../../constants/constants';
import withStorage, { WithStorageProps } from '../../hoc/withStorage';
import { SearchProps } from '../../types/form';
import './Search.css';

const Search: React.FC<SearchProps & WithStorageProps> = (props) => {
  const { getValue, setValue, onSearch } = props;
  const storedSearchValue = getValue() ?? '';
  const [searchValue, setSearchValue] = useState(storedSearchValue);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    onSearch(searchValue);
    setValue(searchValue);
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
      />
    </form>
  );
};

export default withStorage(Search, localStorage, searchValueKey);
