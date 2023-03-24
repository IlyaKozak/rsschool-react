import React from 'react';

import { FormInputs } from '../../models/types';
import {
  getAuthorValidationText,
  getPublishedDateValidationText,
  getTitleValidationText,
  getValidationRequiredText,
  getValidationText,
} from '../../utils/inputsValidators';
import AuthorInput from '../FormInputs/AuthorInput';
import BookCoverInput from '../FormInputs/BookCoverInput';
import BookGenreSelect from '../FormInputs/BookGenreSelect';
import BookIsAvailableInput from '../FormInputs/BookIsAvailableInput';
import ProcessingIsAgreedInput from '../FormInputs/ProcessingIsAgreedInput';
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
    processingIsAgreedRef: React.createRef(),
  };
  state = {
    authorValidationText: null,
    titleValidationText: null,
    publishedDateValidationText: null,
    bookGenreValidationText: null,
    bookCoverValidationText: null,
    bookIsAvailableValidationText: null,
    processingIsAgreedValidationText: null,
  };

  formSubmitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    this.validateInputs();
    this.clearForm();
  }

  validateInputs() {
    const {
      authorRef,
      titleRef,
      publishedDateRef,
      bookGenreRef,
      bookCoverRefs,
      processingIsAgreedRef,
    } = this.formInputsRefs;

    const authorValidationText = getAuthorValidationText(authorRef.current!.value);
    const titleValidationText = getTitleValidationText(titleRef.current!.value);
    const publishedDateValidationText = getPublishedDateValidationText(
      publishedDateRef.current!.value
    );
    const bookGenreValidationText = getValidationText(bookGenreRef.current!.value);
    const bookCoverValidationText = bookCoverRefs.some((ref) => ref.current!.checked)
      ? null
      : getValidationText('');
    const processingIsAgreedValidationText = getValidationRequiredText(
      processingIsAgreedRef.current!.checked
    );

    this.setState({
      authorValidationText,
      titleValidationText,
      publishedDateValidationText,
      bookGenreValidationText,
      bookCoverValidationText,
      processingIsAgreedValidationText,
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
      processingIsAgreedRef,
    } = this.formInputsRefs;
    const {
      authorValidationText,
      titleValidationText,
      publishedDateValidationText,
      bookGenreValidationText,
      bookCoverValidationText,
      bookIsAvailableValidationText,
      processingIsAgreedValidationText,
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
            <label htmlFor="image">
              Book Image:
              <input type="file" id="image" name="image" />
            </label>

            <ProcessingIsAgreedInput
              validationText={processingIsAgreedValidationText}
              innerRef={processingIsAgreedRef}
            />
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
