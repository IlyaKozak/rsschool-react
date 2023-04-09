import React, { useContext, useState } from 'react';

import { MiniCardListProps } from '../../types/miniCard';
import { ResponseBookData } from '../../types/responseData';
import { FullCard } from '../../types/fullCard';
import MiniCardItem from './MiniCardItem';
import CardsContext from '../../context/cardsContext';
import FullCardItem from './FullCardItem';
import { API } from '../../constants/constants';
import useAPI from '../../hooks/useAPI';
import Loader from '../Loader/Loader';
import Modal from '../Modal/Modal';
import './CardList.css';

const MiniCardList: React.FC<MiniCardListProps> = (props) => {
  const cardsContext = useContext(CardsContext);
  const { responseData } = cardsContext;
  const { isLoading, sendRequest } = useAPI();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fullCard, setFullCard] = useState<FullCard>();
  const { books } = props;

  const requestCardFromAPI = (bookKey: string, callback: (data: ResponseBookData) => void) => {
    sendRequest(
      {
        url: `${API.BookUrl}${bookKey}.json`,
      },
      (data) => callback(data)
    );
  };

  const showFullCardHandler = async (id: string) => {
    setIsModalOpen(true);
    const card = responseData[responseData.findIndex((book) => book.key === id)];

    const generateCard = (data: ResponseBookData) => {
      let description = data?.description;
      if (description instanceof Object) {
        description = description.value;
      }
      let firstSentence = card?.first_sentence?.at(0);
      if (data.excerpts && data.excerpts[0].excerpt) {
        firstSentence = Object.values(data.excerpts[0].excerpt).join('');
      }

      const newFullCard = new FullCard({
        id,
        title: card.title,
        published: card.first_publish_year,
        author: card.author_name?.slice(0, 2).join(', '),
        cover: card.cover_edition_key,
        firstSentence,
        pages: card.number_of_pages_median,
        persons: card.person?.slice(0, 4).join(', '),
        places: card.place?.slice(0, 4).join(', '),
        rating: card.ratings_average?.toFixed(1),
        subject: card.subject?.slice(0, 4).join(', '),
        description,
      });

      setFullCard(newFullCard);
    };

    requestCardFromAPI(id, generateCard);
  };

  return (
    <>
      <section className="cardList" data-testid="cardList">
        {books.map((book) => (
          <MiniCardItem key={book.id} {...book} onClick={showFullCardHandler} />
        ))}
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          {isLoading && <Loader />}
          {!isLoading && fullCard && <FullCardItem key={fullCard.id} {...fullCard} />}
        </Modal>
      </section>
    </>
  );
};

export default MiniCardList;
