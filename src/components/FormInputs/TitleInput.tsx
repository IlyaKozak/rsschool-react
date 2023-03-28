import React from 'react';

import { InputProps } from '../../models/types';

const TitleInput: React.FC<InputProps> = (props) => {
  const { validationText, innerRef } = props;

  return (
    <label htmlFor="title">
      Title:
      <input
        type="text"
        name="title"
        id="title"
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

export default TitleInput;
