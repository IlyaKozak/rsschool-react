import React from 'react';

import withForwardRef from '../../hoc/withForwardRef';
import { InputProps } from '../../models/types';

const DateInput: React.FC<InputProps> = (props) => {
  const { validationText, name, onChange, onBlur, forwardRef } = props;

  return (
    <label htmlFor={name}>
      <span>{name}:</span>
      <input
        type="date"
        id={name}
        name={name}
        data-testid={name}
        ref={forwardRef}
        onChange={onChange}
        onBlur={onBlur}
      />
      {validationText && (
        <span className="validation-text" title="validation requirements">
          {validationText}
        </span>
      )}
    </label>
  );
};

export default withForwardRef(DateInput);
