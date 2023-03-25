import React from 'react';

import { CardListProps } from '../../models/types';
import CardItem from './CardItem';
import './CardList.css';

class CardList extends React.Component<CardListProps> {
  render() {
    const { books } = this.props;

    return (
      <>
        <section className="cardList" title="card list">
          {books.map((book) => (
            <CardItem key={book.id} {...book} />
          ))}
        </section>
      </>
    );
  }
}

export default CardList;
