import React from 'react';

import { InputProps } from '../../models/types';

class PublishedDateInput extends React.Component<InputProps> {
  render() {
    const { validationText, innerRef } = this.props;

    return (
      <label htmlFor="published">
        Published:
        <input
          type="date"
          id="published"
          data-testid="published"
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

export default PublishedDateInput;
