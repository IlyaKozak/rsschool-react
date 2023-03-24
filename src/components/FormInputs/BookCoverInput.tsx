import React from 'react';

import { InputProps } from '../../models/types';

class BookCoverInput extends React.Component<InputProps> {
  render() {
    const { validationText, innerRefs } = this.props;

    return (
      <div className="bookcover">
        <label htmlFor="hardcover">
          Hardcover
          <input
            type="radio"
            name="bookcover"
            value="hardcover"
            id="hardcover"
            ref={innerRefs![0]}
          />
        </label>
        <label htmlFor="paperback">
          <input
            type="radio"
            name="bookcover"
            value="paperback"
            id="paperback"
            ref={innerRefs![1]}
          />
          Paperback
        </label>
        {validationText && <span className="validation-text">{validationText}</span>}
      </div>
    );
  }
}

export default BookCoverInput;
