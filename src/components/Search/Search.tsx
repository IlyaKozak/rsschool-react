import React, { useEffect, useState } from 'react';

import { searchValueKey } from '../../constants/constants';
import withStorage, { WithStorageProps } from '../../hoc/withStorage';
import './Search.css';

const Search: React.FC<WithStorageProps> = (props) => {
  const [searchValue, setSearchValue] = useState(props.getValue() ?? '');

  const updateInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    return function cleanup() {
      props.setValue(searchValue);
    };
  });

  return (
    <section className="search">
      <input
        type="search"
        placeholder="&#128269; Search here …"
        value={searchValue}
        onChange={updateInputValue}
      />
    </section>
  );
};

export default withStorage(Search, localStorage, searchValueKey);
