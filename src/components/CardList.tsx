import React from 'react';
import Card, { CardProps } from './Card';
import './CardList.css';

export type CardListProps = {
  books: CardProps[];
};

class CardList extends React.Component<CardListProps> {
  render() {
    const { books } = this.props;

    return (
      <>
        <h1>Books</h1>
        <section className="cardList">
          {books.map((book) => (
            <Card key={book.title + book.author} {...book} />
          ))}
        </section>
      </>
    );
  }
}

export default CardList;
