import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';

import { MiniCardListProps } from '../../types/miniCard';
import { ResponseBookData, ResponseData } from '../../types/responseData';
import { FullCard } from '../../types/fullCard';
import MiniCardItem from './MiniCardItem';
import FullCardItem from './FullCardItem';
import Loader from '../Loader/Loader';
import Modal from '../Modal/Modal';
import { useLazyGetBookByKeyQuery, useSearchBooksQuery } from '../../services/openLibraryApi';
import { RootState } from '../../store';
import './CardList.css';

const MiniCardList: React.FC<MiniCardListProps> = (props) => {
  const { books } = props;
  const [fullCard, setFullCard] = useState<FullCard | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const storedSearchValue = useSelector((state: RootState) => state.search.searchValue);
  const { data: responseData } = useSearchBooksQuery(storedSearchValue);
  const [getBookById, result] = useLazyGetBookByKeyQuery();
  const { error, isFetching } = result;

  const generateFullCard = useCallback((id: string, card: ResponseData, book: ResponseBookData) => {
    let description = book?.description;
    if (description instanceof Object) {
      description = description.value;
    }
    let firstSentence = card?.first_sentence?.at(0);
    if (book?.excerpts && book.excerpts[0].excerpt) {
      firstSentence = Object.values(book.excerpts[0].excerpt).join('');
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
  }, []);

  const showFullCardHandler = useCallback(
    async (id: string) => {
      if (!responseData) return;
      const card = responseData.docs[responseData.docs.findIndex((book) => book.key === id)];

      setIsModalOpen(true);
      getBookById(id, true)
        .unwrap()
        .then((book) => {
          generateFullCard(id, card, book);
        })
        .catch(() => {});
    },
    [responseData, getBookById, generateFullCard]
  );

  const modalHandler = useCallback(() => {
    setIsModalOpen(false);
    setFullCard(null);
  }, []);

  return (
    <>
      <section className="cardList" data-testid="cardList">
        {books.map((book) => (
          <MiniCardItem key={book.id} {...book} onClick={showFullCardHandler} />
        ))}
        <Modal isOpen={isModalOpen} onClose={modalHandler}>
          {error && 'status' in error && <p className="error">{error.status}</p>}
          {isFetching && <Loader />}
          {!isFetching && !error && fullCard && <FullCardItem key={fullCard.id} {...fullCard} />}
        </Modal>
      </section>
    </>
  );
};

export default MiniCardList;
