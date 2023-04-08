import React, { useContext, useState } from 'react';

import { MiniCardListProps } from '../../types/miniCard';
import { FullCard } from '../../types/fullCard';
import MiniCardItem from './MiniCardItem';
import CardsContext from '../../context/cardsContext';
import FullCardItem from './FullCardItem';
import Modal from '../Modal/Modal';
import './CardList.css';

const CardList: React.FC<MiniCardListProps> = (props) => {
  const cardsContext = useContext(CardsContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fullCard, setFullCard] = useState<FullCard>();
  const { books } = props;

  const showFullCardHandler = async (id: number) => {
    const responseCard = cardsContext.responseData[books.findIndex((book) => book.id === id)];
    const newFullCard = new FullCard({
      id: responseCard._version_,
      title: responseCard.title,
      published: responseCard.first_publish_year,
      author: responseCard.author_name?.slice(0, 2).join(', '),
      cover: responseCard.cover_edition_key,
      firstSentence: responseCard?.first_sentence?.at(0),
      pages: responseCard.number_of_pages_median,
      persons: responseCard.person?.slice(0, 4).join(', '),
      places: responseCard.place?.slice(0, 4).join(', '),
      rating: responseCard.ratings_average?.toFixed(1),
      subject: responseCard.subject?.slice(0, 4).join(', '),
    });
    setFullCard(newFullCard);
    setIsModalOpen(true);
  };

  return (
    <>
      <section className="cardList" data-testid="cardList">
        {books.map((book) => (
          <MiniCardItem key={book.id} {...book} onClick={showFullCardHandler} />
        ))}
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          {fullCard && <FullCardItem key={fullCard.id} {...fullCard} />}
        </Modal>
      </section>
    </>
  );
};

export default CardList;
