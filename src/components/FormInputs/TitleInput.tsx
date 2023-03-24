import React from 'react';

import { InputProps } from '../../models/types';

class TitleInput extends React.Component<InputProps> {
  render() {
    const { validationText, innerRef } = this.props;

    return (
      <label htmlFor="title">
        Title:
        <input type="text" id="title" ref={innerRef} />
        {validationText && <span className="validation-text">{validationText}</span>}
      </label>
    );
  }
}

export default TitleInput;
