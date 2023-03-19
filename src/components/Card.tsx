import React from 'react';
import './Card.css';

export type CardProps = {
  title: string;
  author: string;
  cover: string;
  stars: number;
  rating: number;
};

class Card extends React.Component<CardProps> {
  render() {
    const { title, author, cover, stars, rating } = this.props;

    return (
      <div className="card">
        <img className="card__cover" src={cover} alt="book cover" />
        <h3 className="card__title">{title}</h3>
        <em className="card__author">by {author}</em>
        <div className="card__stats">
          <span>&#9733;{stars}</span>
          <span>{rating}&#128200;</span>
        </div>
      </div>
    );
  }
}

export default Card;
