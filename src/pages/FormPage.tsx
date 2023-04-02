import React, { useContext, useState } from 'react';

import Form from '../components/Form/Form';
import CardList from '../components/Cards/CardList';
import { Card } from '../models/types';
import CardsContext from '../context/cardsContext';

const FormPage: React.FC = () => {
  const cardsContext = useContext(CardsContext);
  const { addCardHandler } = cardsContext;

  const [formCards, setFormCards] = useState<Card[]>([]);
  const addFormCardHandler = (card: Card) => {
    setFormCards((prevCards) => [...prevCards, card]);
    addCardHandler(card);
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
