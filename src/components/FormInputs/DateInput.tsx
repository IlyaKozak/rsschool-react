import React from 'react';

import withForwardRef from '../../hoc/withForwardRef';
import { InputProps } from '../../types/form';

const DateInput: React.FC<InputProps> = (props) => {
  const { validationText, name, onChange, forwardRef } = props;

  return (
    <label htmlFor={name}>
      <span>{name}:</span>
      <input
        type="date"
        id={name}
        name={name}
        data-testid={name}
        ref={forwardRef as React.Ref<HTMLInputElement>}
        onChange={onChange}
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
