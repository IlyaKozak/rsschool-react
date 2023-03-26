import React from 'react';

import { InputProps } from '../../models/types';

class BookImageUploadInput extends React.Component<InputProps> {
  render() {
    const { validationText, innerRef } = this.props;

    return (
      <label htmlFor="image">
        Book Image:
        <input
          type="file"
          id="image"
          data-testid="image"
          name="image"
          ref={innerRef as React.RefObject<HTMLInputElement>}
        />
        {validationText && (
          <span className="validation-text" title="validation requirements">
            {validationText}
          </span>
        )}
      </label>
    );
  }
}

export default BookImageUploadInput;
