import React from 'react';
import { booksGenres } from '../../mock/books';
import './Form.css';

class Form extends React.Component {
  render() {
    return (
      <>
        <form id="book-form" onSubmit={(e) => e.preventDefault()}>
          <fieldset>
            <legend>Book</legend>

            {/* Text Input */}
            <label htmlFor="author">
              Author:
              <input type="text" id="author" pattern="^[A-Z]{1}[a-zA-Z ]+$" />
            </label>
            <label htmlFor="title">
              Title:
              <input type="text" id="title" />
            </label>

            {/* Date Input */}
            <label htmlFor="published">
              Published:
              <input type="date" id="published" />
            </label>

            {/* Dropdown/Select */}
            <label htmlFor="genre">
              Book Genre:
              <select name="genre" id="genre">
                {booksGenres.map((genre) => {
                  return (
                    <option key={genre} value={genre}>
                      {genre}
                    </option>
                  );
                })}
              </select>
            </label>

            {/* Checkbox */}
            <label htmlFor="isAvailable">
              <input type="checkbox" name="isAvailable" id="isAvailable" />
              Book Available
            </label>

            {/* Switcher/Radio */}
            <div className="bookcover">
              <label htmlFor="hardcover">
                Hardcover
                <input type="radio" name="bookcover" id="hardcover" />
              </label>
              <label htmlFor="paperback">
                Paperback
                <input type="radio" name="bookcover" id="paperback" />
              </label>
            </div>

            {/* File Upload/Image */}
            <label htmlFor="cover">
              Book Cover:
              <input type="file" id="cover" name="cover" accept="image/*" />
            </label>

            {/* Checkbox */}
            <label htmlFor="isAgreed">
              <input type="checkbox" name="isAgreed" id="isAgreed" />I agree to the processing of
              provided data
            </label>
          </fieldset>
        </form>
        {/* Submit Button */}
        <button type="submit" form="book-form">
          Submit
        </button>
      </>
    );
  }
}

export default Form;
