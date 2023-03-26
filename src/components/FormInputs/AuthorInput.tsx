import React from 'react';

import { InputProps } from '../../models/types';

class AuthorInput extends React.Component<InputProps> {
  render() {
    const { validationText, innerRef } = this.props;

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
  }
}

export default AuthorInput;
