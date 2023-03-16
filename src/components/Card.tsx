import React from 'react';

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
        <img className="cover" src={cover} alt="book cover" />
        <h3 className="title">{title}</h3>
        <em className="author">by {author}</em>
        <div className="stats">
          <span className="start">&#9733;{stars}</span>
          <span className="rating">{rating}&#128200;</span>
        </div>
      </div>
    );
  }
}

export default Card;
