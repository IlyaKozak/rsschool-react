import React from 'react';

import { Card } from '../../models/types';
import './CardItem.css';

class CardItem extends React.Component<Card> {
  render() {
    const { title, author, image, published, isAvailable, bookcover, genre } = this.props;

    return (
      <article className={`card ${isAvailable && 'available'}`}>
        <img className="card__cover" src={image} alt="book image" />
        <h3 className="card__title">{title}</h3>
        <em className="card__author" title="author">
          by {author}
        </em>
        <time>
          Published:&nbsp;
          {published.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}
        </time>
        <hr />
        <span>Cover: {bookcover}</span>
        <span>Genre: {genre}</span>
      </article>
    );
  }
}

export default CardItem;
