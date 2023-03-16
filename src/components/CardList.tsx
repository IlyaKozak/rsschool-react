import React from 'react';
import Card, { CardProps } from './Card';

export type CardListProps = {
  books: CardProps[];
};

class CardList extends React.Component<CardListProps> {
  render() {
    const { books } = this.props;

    return (
      <section className="cardList">
        {books.map((book) => (
          <Card key={book.title} {...book} />
        ))}
      </section>
    );
  }
}

export default CardList;
