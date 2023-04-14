import React, { useEffect, useState } from 'react';
import { OPEN_LIBRARY_API } from '../../constants/api';

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
    description,
  } = props;
  const [isLoading, setLoading] = useState(true);
  const [imgSrc, setImgSrc] = useState('');

  useEffect(() => {
    if (!cover) return;
    const img = new Image();
    const src = `${OPEN_LIBRARY_API.coversEndpoint}${cover}-M.jpg`;
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
      {description && (
        <>
          <hr />
          <span className="fullcard__description">
            <i>Description: </i> {description}
          </span>
        </>
      )}
      {firstSentence && (
        <>
          <hr />
          <span>
            <i>First sentence:</i> {firstSentence}
          </span>
        </>
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
    </article>
  );
};

export default FullCardItem;
