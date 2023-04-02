import React from 'react';

import { CardListProps } from '../../models/types';
import CardItem from './CardItem';
import './CardList.css';

const CardList: React.FC<CardListProps> = (props) => {
  const { books } = props;

  return (
    <>
      <section className="cardList" title="card list">
        {books.map((book) => (
          <CardItem key={book.id} {...book} />
        ))}
      </section>
    </>
  );
};

export default CardList;
