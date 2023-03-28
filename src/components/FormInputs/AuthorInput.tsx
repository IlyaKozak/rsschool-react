import React from 'react';

import { InputProps } from '../../models/types';

const AuthorInput: React.FC<InputProps> = (props) => {
  const { validationText, innerRef } = props;

  return (
    <label htmlFor="author">
      Author:
      <input
        type="text"
        name="author"
        id="author"
        ref={innerRef as React.RefObject<HTMLInputElement>}
      />
      {validationText && (
        <span className="validation-text" title="validation requirements">
          {validationText}
        </span>
      )}
    </label>
  );
};

export default AuthorInput;
