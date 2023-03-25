import React from 'react';

import Form from '../components/Form/Form';
import CardList from '../components/Cards/CardList';
import { Card } from '../models/types';

type FormPageState = {
  cards: Card[];
};

class FormPage extends React.Component<Record<string, never>, FormPageState> {
  state: FormPageState = {
    cards: [],
  };

  addCardHandler(card: Card) {
    this.setState((prevState) => ({
      cards: [...prevState.cards, card],
    }));
  }

  render() {
    return (
      <>
        <h1>Submit a New Card</h1>
        <Form onCardAdd={this.addCardHandler.bind(this)} />
        <CardList books={this.state.cards} />
      </>
    );
  }
}

export default FormPage;
