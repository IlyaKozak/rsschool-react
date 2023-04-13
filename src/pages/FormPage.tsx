import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Form from '../components/Form/Form';
import CardList from '../components/Cards/CardList';
import { Card } from '../types/card';
import { RootState } from '../store';
import { addFormCard } from '../store/formSlice';
import serialize from '../utils/serialize';

const FormPage: React.FC = () => {
  const formCards = useSelector((state: RootState) => state.form.formCards);
  const dispatch = useDispatch();

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
