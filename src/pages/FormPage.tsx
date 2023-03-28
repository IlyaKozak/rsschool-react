import React, { useState } from 'react';

import Form from '../components/Form/Form';
import CardList from '../components/Cards/CardList';
import { Card } from '../models/types';

const FormPage: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);

  const addCardHandler = (card: Card) => {
    setCards((prevCards) => [...prevCards, card]);
  };

  return (
    <>
      <h1>Submit a New Card</h1>
      <Form onCardAdd={addCardHandler} />
      <CardList books={cards} />
    </>
  );
};

export default FormPage;
