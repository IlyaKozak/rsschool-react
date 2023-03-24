import React from 'react';

import { booksGenres } from '../../mock/books';
import { FormInputs } from '../../models/types';
import {
  getAuthorValidationText,
  getPublishedDateValidationText,
  getTitleValidationText,
} from '../../utils/inputsValidators';
import AuthorInput from '../FormInputs/AuthorInput';
import PublishedDateInput from '../FormInputs/PublishedDateInput';
import TitleInput from '../FormInputs/TitleInput';
import './Form.css';

class Form extends React.Component {
  formInputsRefs: FormInputs = {
    formRef: React.createRef(),
    authorRef: React.createRef(),
    titleRef: React.createRef(),
    publishedDateRef: React.createRef(),
  };
  state = {
    authorValidationText: null,
    titleValidationText: null,
    publishedDateValidationText: null,
  };

  formSubmitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    this.validateInputs();
    this.clearForm();
  }

  validateInputs() {
    const { authorRef, titleRef, publishedDateRef } = this.formInputsRefs;

    const authorValidationText = getAuthorValidationText(authorRef.current!.value);
    const titleValidationText = getTitleValidationText(titleRef.current!.value);
    const publishedDateValidationText = getPublishedDateValidationText(
      publishedDateRef.current!.value
    );
    this.setState({ authorValidationText, titleValidationText, publishedDateValidationText });
  }

  clearForm() {
    const { formRef } = this.formInputsRefs;
    formRef.current!.reset();
  }

  render() {
    const { formRef, authorRef, titleRef, publishedDateRef } = this.formInputsRefs;
    const { authorValidationText, titleValidationText, publishedDateValidationText } = this.state;

    return (
      <>
        <form id="book-form" onSubmit={this.formSubmitHandler.bind(this)} ref={formRef}>
          <fieldset>
            <legend>Book</legend>

            <AuthorInput validationText={authorValidationText} innerRef={authorRef} />
            <TitleInput validationText={titleValidationText} innerRef={titleRef} />

            <PublishedDateInput
              validationText={publishedDateValidationText}
              innerRef={publishedDateRef}
            />

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
