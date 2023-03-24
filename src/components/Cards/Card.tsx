import React from 'react';

import { CardProps } from '../../models/types';
import './Card.css';

class Card extends React.Component<CardProps> {
  render() {
    const { title, author, cover, stars, rating } = this.props;
    const imgUrl = new URL(`/src/assets/${cover}`, import.meta.url).href;

    return (
      <article className="card">
        <img className="card__cover" src={imgUrl} alt="book cover" />
        <h3 className="card__title">{title}</h3>
        <em className="card__author" title="author">
          by {author}
        </em>
        <div className="card__stats">
          <span>&#9733;{stars}</span>
          <span>{rating}&#128200;</span>
        </div>
      </article>
    );
  }
}

export default Card;
