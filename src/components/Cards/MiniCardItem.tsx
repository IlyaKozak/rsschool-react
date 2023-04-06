import React from 'react';

import { MiniCardItemProps } from '../../types/miniCard';

const MiniCardItem: React.FC<MiniCardItemProps> = (props) => {
  const { id, title, author, published, onClick } = props;

  return (
    <article className="card" onClick={onClick.bind(this, id)}>
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
