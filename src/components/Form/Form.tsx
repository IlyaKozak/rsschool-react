import React from 'react';

import { FormInputs } from '../../models/types';
import {
  getAuthorValidationText,
  getPublishedDateValidationText,
  getTitleValidationText,
  getValidationText,
} from '../../utils/inputsValidators';
import AuthorInput from '../FormInputs/AuthorInput';
import BookCoverInput from '../FormInputs/BookCoverInput';
import BookGenreSelect from '../FormInputs/BookGenreSelect';
import BookIsAvailableInput from '../FormInputs/BookIsAvailableInput';
import PublishedDateInput from '../FormInputs/PublishedDateInput';
import TitleInput from '../FormInputs/TitleInput';
import './Form.css';

class Form extends React.Component {
  formInputsRefs: FormInputs = {
    formRef: React.createRef(),
    authorRef: React.createRef(),
    titleRef: React.createRef(),
    publishedDateRef: React.createRef(),
    bookGenreRef: React.createRef(),
    bookCoverRefs: [React.createRef(), React.createRef()],
    bookIsAvailableRef: React.createRef(),
  };
  state = {
    authorValidationText: null,
    titleValidationText: null,
    publishedDateValidationText: null,
    bookGenreValidationText: null,
    bookCoverValidationText: null,
    bookIsAvailableValidationText: null,
  };

  formSubmitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    this.validateInputs();
    this.clearForm();
  }

  validateInputs() {
    const { authorRef, titleRef, publishedDateRef, bookGenreRef, bookCoverRefs } =
      this.formInputsRefs;

    const authorValidationText = getAuthorValidationText(authorRef.current!.value);
    const titleValidationText = getTitleValidationText(titleRef.current!.value);
    const publishedDateValidationText = getPublishedDateValidationText(
      publishedDateRef.current!.value
    );
    const bookGenreValidationText = getValidationText(bookGenreRef.current!.value);
    const bookCoverValidationText = bookCoverRefs.some((ref) => ref.current!.checked)
      ? null
      : getValidationText('');

    this.setState({
      authorValidationText,
      titleValidationText,
      publishedDateValidationText,
      bookGenreValidationText,
      bookCoverValidationText,
    });
  }

  clearForm() {
    const { formRef } = this.formInputsRefs;
    formRef.current!.reset();
  }

  render() {
    const {
      formRef,
      authorRef,
      titleRef,
      publishedDateRef,
      bookGenreRef,
      bookCoverRefs,
      bookIsAvailableRef,
    } = this.formInputsRefs;
    const {
      authorValidationText,
      titleValidationText,
      publishedDateValidationText,
      bookGenreValidationText,
      bookCoverValidationText,
      bookIsAvailableValidationText,
    } = this.state;

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
            <BookGenreSelect validationText={bookGenreValidationText} innerRef={bookGenreRef} />
            <BookCoverInput validationText={bookCoverValidationText} innerRefs={bookCoverRefs} />
            <BookIsAvailableInput
              validationText={bookIsAvailableValidationText}
              innerRef={bookIsAvailableRef}
            />

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
        <button type="submit" form="book-form">
          Submit
        </button>
      </>
    );
  }
}

export default Form;
