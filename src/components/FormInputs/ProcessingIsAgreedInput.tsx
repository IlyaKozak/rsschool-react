import React from 'react';

import { InputProps } from '../../models/types';

const ProcessingIsAgreedInput: React.FC<InputProps> = (props) => {
  const { validationText, innerRef } = props;

  return (
    <label htmlFor="isAgreed">
      <input
        type="checkbox"
        id="isAgreed"
        name="isAgreed"
        value="isAgreed"
        ref={innerRef as React.RefObject<HTMLInputElement>}
      />
      I agree to the processing of provided data
      {validationText && (
        <span className="validation-text" title="validation requirements">
          {validationText}
        </span>
      )}
    </label>
  );
};

export default ProcessingIsAgreedInput;
