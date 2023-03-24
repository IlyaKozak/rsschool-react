import React from 'react';
import { booksGenres } from '../../mock/books';

import { InputProps } from '../../models/types';

class BookGenreSelect extends React.Component<InputProps> {
  render() {
    const { validationText, innerRef } = this.props;

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
        {validationText && <span className="validation-text">{validationText}</span>}
      </label>
    );
  }
}

export default BookGenreSelect;
