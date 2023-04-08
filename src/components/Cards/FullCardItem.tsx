import React, { useEffect, useState } from 'react';
import { API } from '../../constants/constants';

import { FullCard } from '../../types/fullCard';
import Loader from '../Loader/Loader';
import './FullCardItem.css';

const FullCardItem: React.FC<FullCard> = (props) => {
  const {
    title,
    published,
    author,
    cover,
    firstSentence,
    pages,
    persons,
    places,
    rating,
    subject,
  } = props;
  const [isLoading, setLoading] = useState(true);
  const [imgSrc, setImgSrc] = useState('');

  useEffect(() => {
    if (!cover) return;
    const img = new Image();
    const src = `${API.CoversUrl}${cover}-M.jpg`;
    img.src = src;
    img.onload = () => {
      setImgSrc(src);
      setLoading(false);
    };
  }, [cover]);

  return (
    <article className="fullcard">
      {cover && isLoading && <Loader />}
      {cover && imgSrc && <img className="fullcard__cover" src={imgSrc} alt="book image" />}
      <h3 className="fullcard__title">{title}</h3>
      <em className="fullcard__author" title="author">
        by {author}
      </em>
      <time>{published}</time>
      <hr />
      {rating && (
        <span>
          <i>Rating:</i> {rating}
        </span>
      )}
      {pages && (
        <span>
          <i>Pages:</i> {pages}
        </span>
      )}
      {subject && (
        <span>
          <i>Subject:</i> {subject}
        </span>
      )}
      {persons && (
        <span>
          <i>Persons:</i> {persons}
        </span>
      )}
      {places && (
        <span>
          <i>Places:</i> {places}
        </span>
      )}
      {firstSentence && (
        <span>
          <i>First sentence:</i> {firstSentence}
        </span>
      )}
    </article>
  );
};

export default FullCardItem;
