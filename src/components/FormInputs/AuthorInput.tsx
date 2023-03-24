import React from 'react';

import { InputProps } from '../../models/types';

class AuthorInput extends React.Component<InputProps> {
  render() {
    const { validationText, innerRef } = this.props;

    return (
      <label htmlFor="author">
        Author:
        <input type="text" id="author" ref={innerRef} />
        {validationText && <span className="validation-text">{validationText}</span>}
      </label>
    );
  }
}

export default AuthorInput;
