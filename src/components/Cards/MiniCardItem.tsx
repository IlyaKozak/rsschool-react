import React from 'react';

import { MiniCard } from '../../models/types';

const MiniCardItem: React.FC<MiniCard> = (props) => {
  const { title, author, published } = props;

  return (
    <article className="card">
      <h3 className="card__title">{title}</h3>
      <em className="card__author" title="author">
        by {author}
      </em>
      <time>
        Published:&nbsp;
        {published}
      </time>
    </article>
  );
};

export default MiniCardItem;
