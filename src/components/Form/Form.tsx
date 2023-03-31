import React, { useEffect, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import { Card, FormProps } from '../../models/types';
import CardItem from '../Cards/CardItem';
import TextInput from '../FormInputs/TextInput';
import CheckBoxInput from '../FormInputs/CheckBoxInput';
import DateInput from '../FormInputs/DateInput';
import SelectInput from '../FormInputs/SelectInput';
import RadioInput from '../FormInputs/RadioInput';
// import BookImageUploadInput from '../FormInputs/BookImageUploadInput';
import Modal from '../Modal/Modal';
import {
  authorRegisterOptions,
  titleRegisterOptions,
  publishedRegisterOptions,
  requiredRegisterOption,
} from './formRegisterOptions';
import { bookCovers, booksGenres } from '../../mock/books';
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
    mode: 'onSubmit',
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
          <DateInput
            validationText={errors?.published?.message?.toString()}
            {...register('published', publishedRegisterOptions)}
          />
          <SelectInput
            text={'Book Genre'}
            validationText={errors?.genre?.message?.toString()}
            items={booksGenres}
            {...register('genre', requiredRegisterOption)}
          />
          <RadioInput
            validationText={errors?.bookcover?.message?.toString()}
            items={bookCovers}
            {...register('bookcover', requiredRegisterOption)}
          />
          <CheckBoxInput text={'Book Available'} {...register('isAvailable')} />
          {/* <BookImageUploadInput
            validationText={validation.bookImageValidationText}
            innerRef={formInputsRefs.bookImageRef}
          /> */}
          <CheckBoxInput
            text={'I agree to the processing of provided data'}
            validationText={errors?.isAgreed?.message?.toString()}
            {...register('isAgreed', requiredRegisterOption)}
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
