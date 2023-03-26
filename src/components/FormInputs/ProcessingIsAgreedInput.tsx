import React from 'react';

import { InputProps } from '../../models/types';

class ProcessingIsAgreedInput extends React.Component<InputProps> {
  render() {
    const { validationText, innerRef } = this.props;

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
  }
}

export default ProcessingIsAgreedInput;
