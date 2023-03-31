import React from 'react';

import { booksGenres } from '../../mock/books';
import withForwardRef from '../../hoc/withForwardRef';
import { InputProps } from '../../models/types';

const BookGenreSelect: React.FC<InputProps> = (props) => {
  const { validationText, text, name, onChange, forwardRef } = props;

  return (
    <label htmlFor={name}>
      {text}:
      <select
        id={name}
        name={name}
        onChange={onChange}
        ref={forwardRef as React.Ref<HTMLSelectElement>}
      >
        <option value="">-- choose --</option>
        {booksGenres.map((genre) => {
          return (
            <option key={genre} value={genre}>
              {genre}
            </option>
          );
        })}
      </select>
      {validationText && (
        <span className="validation-text" title="validation requirements">
          {validationText}
        </span>
      )}
    </label>
  );
};

export default withForwardRef(BookGenreSelect);
