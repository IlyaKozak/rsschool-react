import React from 'react';

import { FormInputs } from '../../models/types';
import {
  getAuthorValidationText,
  getImageValidationText,
  getPublishedDateValidationText,
  getTitleValidationText,
  getValidationRequiredText,
  getValidationText,
} from '../../utils/inputsValidators';
import AuthorInput from '../FormInputs/AuthorInput';
import BookCoverInput from '../FormInputs/BookCoverInput';
import BookGenreSelect from '../FormInputs/BookGenreSelect';
import BookImageUploadInput from '../FormInputs/BookImageUploadInput';
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
    bookImageRef: React.createRef(),
  };
  state = {
    validation: {
      authorValidationText: null,
      titleValidationText: null,
      publishedDateValidationText: null,
      bookGenreValidationText: null,
      bookCoverValidationText: null,
      bookIsAvailableValidationText: null,
      processingIsAgreedValidationText: null,
      bookImageValidationText: null,
    },
  };

  formSubmitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formIsValid = this.validateInputs();
    console.log(formIsValid);
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
      bookImageRef,
    } = this.formInputsRefs;
    const { validation } = this.state;

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
    const bookImageValidationText = getImageValidationText(bookImageRef.current!.files);

    const formIsValid = Object.values(validation).every((validationMessage) => validationMessage);

    this.setState({
      validation: {
        authorValidationText,
        titleValidationText,
        publishedDateValidationText,
        bookGenreValidationText,
        bookCoverValidationText,
        processingIsAgreedValidationText,
        bookImageValidationText,
      },
    });
    return formIsValid;
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
      bookImageRef,
    } = this.formInputsRefs;
    const {
      authorValidationText,
      titleValidationText,
      publishedDateValidationText,
      bookGenreValidationText,
      bookCoverValidationText,
      bookIsAvailableValidationText,
      processingIsAgreedValidationText,
      bookImageValidationText,
    } = this.state.validation;

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
            <BookImageUploadInput
              validationText={bookImageValidationText}
              innerRef={bookImageRef}
            />
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
