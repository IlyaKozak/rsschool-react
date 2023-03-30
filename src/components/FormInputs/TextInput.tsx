import React from 'react';

import withForwardRef from '../../hoc/withForwardRef';
import { InputProps } from '../../models/types';

const TextInput: React.FC<InputProps> = (props) => {
  const { validationText, name, onChange, forwardRef } = props;

  return (
    <label htmlFor={name}>
      <span>{name}:</span>
      <input type="text" name={name} id={name} ref={forwardRef} onChange={onChange} />
      {validationText && (
        <span className="validation-text" title="validation requirements">
          {validationText}
        </span>
      )}
    </label>
  );
};

export default withForwardRef(TextInput);
