import React from 'react';

import { CardListProps } from '../../models/types';
import Card from './Card';
import './CardList.css';

class CardList extends React.Component<CardListProps> {
  render() {
    const { books } = this.props;

    return (
      <>
        <h1>Books</h1>
        <section className="cardList" title="card list">
          {books.map((book) => (
            <Card key={book.title + book.author} {...book} />
          ))}
        </section>
      </>
    );
  }
}

export default CardList;
