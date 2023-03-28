import React from 'react';

import { InputProps } from '../../models/types';

const BookIsAvailableInput: React.FC<InputProps> = (props) => {
  const { validationText, innerRef } = props;

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
};

export default BookIsAvailableInput;
