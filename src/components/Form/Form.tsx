import React, { useEffect, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import { Card, FormProps } from '../../models/types';
import CardItem from '../Cards/CardItem';
import TextInput from '../FormInputs/TextInput';
// import BookCoverInput from '../FormInputs/BookCoverInput';
// import BookGenreSelect from '../FormInputs/BookGenreSelect';
// import BookImageUploadInput from '../FormInputs/BookImageUploadInput';
// import BookIsAvailableInput from '../FormInputs/BookIsAvailableInput';
// import ProcessingIsAgreedInput from '../FormInputs/ProcessingIsAgreedInput';
// import PublishedDateInput from '../FormInputs/PublishedDateInput';
import Modal from '../Modal/Modal';
import { authorRegisterOptions, titleRegisterOptions } from './formRegisterOptions';
import './Form.css';

const Form: React.FC<FormProps> = (props) => {
  const [newCard, setNewCard] = useState<Card | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    reValidateMode: 'onSubmit',
  });

  useEffect(() => console.log('errors', errors), [errors]);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    // const submittedCard = new Card({
    //   title,
    //   author,
    //   image: URL.createObjectURL(image.files![0]),
    //   published: new Date(published),
    //   isAvailable: isAvailable.checked,
    //   bookcover: formInputsRefs.bookCoverRefs.filter((ref) => ref.current!.checked)[0].current!
    //     .value,
    //   genre,
    // });
    // setNewCard(submittedCard);
    // setIsModalOpen(true);
    // props.onCardAdd(submittedCard);
    console.log(data);
    reset();
  };

  return (
    <>
      <form id="book-form" onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <legend>Book</legend>

          <TextInput
            validationText={errors?.author?.message?.toString()}
            {...register('author', authorRegisterOptions)}
          />
          <TextInput
            validationText={errors?.title?.message?.toString()}
            {...register('title', titleRegisterOptions)}
          />
          {/* <PublishedDateInput
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
          />  */}
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
