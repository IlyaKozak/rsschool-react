import React from 'react';

import Form from '../components/Form/Form';
import CardList from '../components/Cards/CardList';
import { Card } from '../types/card';
import { RootState } from '../store';
import { addFormCard } from '../store/formSlice';
import serialize from '../utils/serialize';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';

const FormPage: React.FC = () => {
  const formCards = useAppSelector((state: RootState) => state.form.formCards);
  const dispatch = useAppDispatch();

  const addFormCardHandler = (card: Card) => {
    dispatch(addFormCard(serialize(card)));
  };

  return (
    <>
      <h1>Submit a New Card</h1>
      <Form onCardAdd={addFormCardHandler} />
      <CardList books={formCards} />
    </>
  );
};

export default FormPage;
