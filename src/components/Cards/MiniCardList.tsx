import React from 'react';

import { MiniCardListProps } from '../../models/types';
import MiniCardItem from './MiniCardItem';
import './CardList.css';

const CardList: React.FC<MiniCardListProps> = (props) => {
  const { books } = props;

  return (
    <>
      <section className="cardList">
        {books.map((book) => (
          <MiniCardItem key={book.id} {...book} />
        ))}
      </section>
    </>
  );
};

export default CardList;
