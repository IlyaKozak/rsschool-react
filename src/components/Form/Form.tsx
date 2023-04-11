import React, { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import CardItem from '../Cards/CardItem';
import TextInput from '../FormInputs/TextInput';
import CheckBoxInput from '../FormInputs/CheckBoxInput';
import DateInput from '../FormInputs/DateInput';
import SelectInput from '../FormInputs/SelectInput';
import RadioInput from '../FormInputs/RadioInput';
import FileInput from '../FormInputs/FileInput';
import Modal from '../Modal/Modal';
import {
  authorRegisterOptions,
  titleRegisterOptions,
  publishedRegisterOptions,
  requiredRegisterOption,
  imageRegisterOptions,
} from './formRegisterOptions';
import { bookCovers, booksGenres } from '../../mock/books';
import { FormProps } from '../../types/form';
import { Card } from '../../types/card';
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

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const { author, title, image, published, isAvailable, bookcover, genre } = data;

    const submittedCard = new Card({
      author,
      title,
      image: URL.createObjectURL(image[0]),
      published,
      isAvailable,
      bookcover,
      genre,
    });

    setNewCard(submittedCard);
    setIsModalOpen(true);
    props.onCardAdd(submittedCard);
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
          <FileInput
            text={'Book Image'}
            validationText={errors?.image?.message?.toString()}
            {...register('image', imageRegisterOptions)}
          />
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
