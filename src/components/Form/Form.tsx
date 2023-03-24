import React from 'react';

import { booksGenres } from '../../mock/books';
import { FormInputs } from '../../models/types';
import { getAuthorValidationText, getTitleValidationText } from '../../utils/inputsValidators';
import AuthorInput from '../FormInputs/AuthorInput';
import TitleInput from '../FormInputs/TitleInput';
import './Form.css';

class Form extends React.Component {
  formInputsRefs: FormInputs = {
    formRef: React.createRef(),
    authorRef: React.createRef(),
    titleRef: React.createRef(),
  };
  state = {
    authorValidationText: null,
    titleValidationText: null,
  };

  formSubmitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const authorValidationText = getAuthorValidationText(
      this.formInputsRefs.authorRef.current!.value
    );
    const titleValidationText = getTitleValidationText(this.formInputsRefs.titleRef.current!.value);
    this.setState({ authorValidationText, titleValidationText });
    this.clearForm();
  }

  clearForm() {
    const { formRef } = this.formInputsRefs;
    formRef.current!.reset();
  }

  render() {
    const { formRef, authorRef, titleRef } = this.formInputsRefs;
    const { authorValidationText, titleValidationText } = this.state;

    return (
      <>
        <form id="book-form" onSubmit={this.formSubmitHandler.bind(this)} ref={formRef}>
          <fieldset>
            <legend>Book</legend>

            <AuthorInput validationText={authorValidationText} innerRef={authorRef} />
            <TitleInput validationText={titleValidationText} innerRef={titleRef} />

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

            {/* Switcher/Radio */}
            <div className="bookcover">
              <label htmlFor="hardcover">
                Hardcover
                <input type="radio" name="bookcover" id="hardcover" />
              </label>
              <label htmlFor="paperback">
                <input type="radio" name="bookcover" id="paperback" />
                Paperback
              </label>
            </div>

            {/* Checkbox */}
            <label htmlFor="isAvailable">
              <input type="checkbox" id="isAvailable" name="isAvailable" />
              Book Available
            </label>

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
