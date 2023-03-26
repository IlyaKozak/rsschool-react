import React from 'react';

import { InputProps } from '../../models/types';

class BookIsAvailableInput extends React.Component<InputProps> {
  render() {
    const { validationText, innerRef } = this.props;

    return (
      <label htmlFor="isAvailable">
        <input
          type="checkbox"
          id="isAvailable"
          name="isAvailable"
          value="isAvailable"
          ref={innerRef as React.RefObject<HTMLInputElement>}
        />
        Book Available
        {validationText && (
          <span className="validation-text" title="validation requirements">
            {validationText}
          </span>
        )}
      </label>
    );
  }
}

export default BookIsAvailableInput;
