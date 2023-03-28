import React, { useState } from 'react';

import { Card, FormInputs, ValidationTexts } from '../../models/types';
import {
  getAuthorValidationText,
  getImageValidationText,
  getPublishedDateValidationText,
  getTitleValidationText,
  getValidationRequiredText,
  getValidationText,
} from '../../utils/inputsValidators';
import CardItem from '../Cards/CardItem';
import AuthorInput from '../FormInputs/AuthorInput';
import BookCoverInput from '../FormInputs/BookCoverInput';
import BookGenreSelect from '../FormInputs/BookGenreSelect';
import BookImageUploadInput from '../FormInputs/BookImageUploadInput';
import BookIsAvailableInput from '../FormInputs/BookIsAvailableInput';
import ProcessingIsAgreedInput from '../FormInputs/ProcessingIsAgreedInput';
import PublishedDateInput from '../FormInputs/PublishedDateInput';
import TitleInput from '../FormInputs/TitleInput';
import Modal from '../Modal/Modal';
import './Form.css';

type FormProps = {
  onCardAdd: (card: Card) => void;
};

const Form: React.FC<FormProps> = (props) => {
  const formInputsRefs: FormInputs = {
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
  const [validation, setValidation] = useState<ValidationTexts>({
    authorValidationText: null,
    titleValidationText: null,
    publishedDateValidationText: null,
    bookGenreValidationText: null,
    bookCoverValidationText: null,
    bookIsAvailableValidationText: null,
    processingIsAgreedValidationText: null,
    bookImageValidationText: null,
  });
  const [newCard, setNewCard] = useState<Card | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formIsValid = validateInputs();

    if (formIsValid) {
      const submittedCard = new Card({
        title: formInputsRefs.titleRef.current!.value,
        author: formInputsRefs.authorRef.current!.value,
        image: URL.createObjectURL(formInputsRefs.bookImageRef.current!.files![0]),
        published: new Date(formInputsRefs.publishedDateRef.current!.value),
        isAvailable: formInputsRefs.bookIsAvailableRef.current!.checked,
        bookcover: formInputsRefs.bookCoverRefs.filter((ref) => ref.current!.checked)[0].current!
          .value,
        genre: formInputsRefs.bookGenreRef.current!.value,
      });
      setNewCard(submittedCard);

      setIsModalOpen(true);
      props.onCardAdd(submittedCard);
      clearForm();
    }
  };

  const validateInputs = () => {
    const validationTexts = {
      authorValidationText: getAuthorValidationText(formInputsRefs.authorRef.current!.value),
      titleValidationText: getTitleValidationText(formInputsRefs.titleRef.current!.value),
      publishedDateValidationText: getPublishedDateValidationText(
        formInputsRefs.publishedDateRef.current!.value
      ),
      bookGenreValidationText: getValidationText(formInputsRefs.bookGenreRef.current!.value),
      bookCoverValidationText: formInputsRefs.bookCoverRefs.some((ref) => ref.current!.checked)
        ? null
        : getValidationText(''),
      bookIsAvailableValidationText: null,
      processingIsAgreedValidationText: getValidationRequiredText(
        formInputsRefs.processingIsAgreedRef.current!.checked
      ),
      bookImageValidationText: getImageValidationText(formInputsRefs.bookImageRef.current!.files),
    };

    setValidation({
      ...validationTexts,
    });

    const formIsValid = Object.values(validationTexts).every(
      (validationMessage) => !validationMessage
    );
    return formIsValid;
  };

  const clearForm = () => {
    const { formRef } = formInputsRefs;
    formRef.current!.reset();
  };

  return (
    <>
      <form id="book-form" onSubmit={formSubmitHandler} ref={formInputsRefs.formRef}>
        <fieldset>
          <legend>Book</legend>

          <AuthorInput
            validationText={validation.authorValidationText}
            innerRef={formInputsRefs.authorRef}
          />
          <TitleInput
            validationText={validation.titleValidationText}
            innerRef={formInputsRefs.titleRef}
          />
          <PublishedDateInput
            validationText={validation.publishedDateValidationText}
            innerRef={formInputsRefs.publishedDateRef}
          />
          <BookGenreSelect
            validationText={validation.bookGenreValidationText}
            innerRef={formInputsRefs.bookGenreRef}
          />
          <BookCoverInput
            validationText={validation.bookCoverValidationText}
            innerRefs={formInputsRefs.bookCoverRefs}
          />
          <BookIsAvailableInput
            validationText={validation.bookIsAvailableValidationText}
            innerRef={formInputsRefs.bookIsAvailableRef}
          />
          <BookImageUploadInput
            validationText={validation.bookImageValidationText}
            innerRef={formInputsRefs.bookImageRef}
          />
          <ProcessingIsAgreedInput
            validationText={validation.processingIsAgreedValidationText}
            innerRef={formInputsRefs.processingIsAgreedRef}
          />
        </fieldset>
      </form>
      <button type="submit" form="book-form">
        Submit
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <p>The Card is Created!</p>
        {newCard && <CardItem {...newCard} />}
      </Modal>
    </>
  );
};

export default Form;
