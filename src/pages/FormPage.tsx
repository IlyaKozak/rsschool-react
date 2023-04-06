import React, { useState } from 'react';

import Form from '../components/Form/Form';
import CardList from '../components/Cards/CardList';
import { Card } from '../types/card';

const FormPage: React.FC = () => {
  const [formCards, setFormCards] = useState<Card[]>([]);
  const addFormCardHandler = (card: Card) => {
    setFormCards((prevCards) => [...prevCards, card]);
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
