import React, { useCallback, useEffect, useRef, useState } from 'react';

import { searchValueKey } from '../../constants/constants';
import withStorage, { WithStorageProps } from '../../hoc/withStorage';
import './Search.css';

const Search: React.FC<WithStorageProps> = (props) => {
  const { getValue, setValue } = props;
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
