import React from 'react';

import { InputProps } from '../../models/types';

class TitleInput extends React.Component<InputProps> {
  render() {
    const { validationText, innerRef } = this.props;

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
  }
}

export default TitleInput;
