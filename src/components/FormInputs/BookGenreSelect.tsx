import React from 'react';

import { booksGenres } from '../../mock/books';
import { InputProps } from '../../models/types';

const BookGenreSelect: React.FC<InputProps> = (props) => {
  const { validationText, innerRef } = props;

  return (
    <label htmlFor="genre">
      Book Genre:
      <select name="genre" id="genre" ref={innerRef as React.RefObject<HTMLSelectElement>}>
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

export default BookGenreSelect;
