import React from 'react';

import { InputProps } from '../../models/types';

const BookCoverInput: React.FC<InputProps> = (props) => {
  const { validationText, innerRefs } = props;

  return (
    <div className="bookcover">
      <label htmlFor="hardcover">
        Hardcover
        <input type="radio" name="bookcover" value="Hardcover" id="hardcover" ref={innerRefs![0]} />
      </label>
      <label htmlFor="paperback">
        <input type="radio" name="bookcover" value="Paperback" id="paperback" ref={innerRefs![1]} />
        Paperback
      </label>
      {validationText && (
        <span className="validation-text" title="validation requirements">
          {validationText}
        </span>
      )}
    </div>
  );
};

export default BookCoverInput;
