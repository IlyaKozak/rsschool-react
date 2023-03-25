import React from 'react';

import { Card, FormInputs } from '../../models/types';
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

type FormProps = {
  onCardAdd: (card: Card) => void;
};

class Form extends React.Component<FormProps> {
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

    const refs = this.formInputsRefs;

    const formIsValid = this.validateInputs();

    if (formIsValid) {
      const newCard = new Card({
        title: refs.titleRef.current!.value,
        author: refs.authorRef.current!.value,
        image: URL.createObjectURL(refs.bookImageRef.current!.files![0]),
        published: new Date(refs.publishedDateRef.current!.value),
        isAvailable: refs.bookIsAvailableRef.current!.checked,
        bookcover: refs.bookCoverRefs.filter((ref) => ref.current!.checked)[0].current!.value,
        genre: refs.bookGenreRef.current!.value,
      });

      this.props.onCardAdd(newCard);
      // TODO: show modal/portal or success text
      this.clearForm();
    }
  }

  validateInputs() {
    const refs = this.formInputsRefs;

    const validationTexts = {
      authorValidationText: getAuthorValidationText(refs.authorRef.current!.value),
      titleValidationText: getTitleValidationText(refs.titleRef.current!.value),
      publishedDateValidationText: getPublishedDateValidationText(
        refs.publishedDateRef.current!.value
      ),
      bookGenreValidationText: getValidationText(refs.bookGenreRef.current!.value),
      bookCoverValidationText: refs.bookCoverRefs.some((ref) => ref.current!.checked)
        ? null
        : getValidationText(''),
      bookIsAvailableValidationText: null,
      processingIsAgreedValidationText: getValidationRequiredText(
        refs.processingIsAgreedRef.current!.checked
      ),
      bookImageValidationText: getImageValidationText(refs.bookImageRef.current!.files),
    };

    this.setState({
      validation: {
        ...validationTexts,
      },
    });

    const formIsValid = Object.values(validationTexts).every(
      (validationMessage) => !validationMessage
    );
    return formIsValid;
  }

  clearForm() {
    const { formRef } = this.formInputsRefs;
    formRef.current!.reset();
  }

  render() {
    const refs = this.formInputsRefs;
    const vals = this.state.validation;

    return (
      <>
        <form id="book-form" onSubmit={this.formSubmitHandler.bind(this)} ref={refs.formRef}>
          <fieldset>
            <legend>Book</legend>

            <AuthorInput validationText={vals.authorValidationText} innerRef={refs.authorRef} />
            <TitleInput validationText={vals.titleValidationText} innerRef={refs.titleRef} />
            <PublishedDateInput
              validationText={vals.publishedDateValidationText}
              innerRef={refs.publishedDateRef}
            />
            <BookGenreSelect
              validationText={vals.bookGenreValidationText}
              innerRef={refs.bookGenreRef}
            />
            <BookCoverInput
              validationText={vals.bookCoverValidationText}
              innerRefs={refs.bookCoverRefs}
            />
            <BookIsAvailableInput
              validationText={vals.bookIsAvailableValidationText}
              innerRef={refs.bookIsAvailableRef}
            />
            <BookImageUploadInput
              validationText={vals.bookImageValidationText}
              innerRef={refs.bookImageRef}
            />
            <ProcessingIsAgreedInput
              validationText={vals.processingIsAgreedValidationText}
              innerRef={refs.processingIsAgreedRef}
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
