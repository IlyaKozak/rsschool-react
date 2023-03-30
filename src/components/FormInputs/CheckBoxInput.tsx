import React from 'react';

import withForwardRef from '../../hoc/withForwardRef';
import { InputProps } from '../../models/types';

const CheckBoxInput: React.FC<InputProps> = (props) => {
  const { validationText, text, name, onChange, onBlur, forwardRef } = props;

  return (
    <label htmlFor={name}>
      <input
        type="checkbox"
        id={name}
        name={name}
        ref={forwardRef}
        onChange={onChange}
        onBlur={onBlur}
      />
      {text}
      {validationText && (
        <span className="validation-text" title="validation requirements">
          {validationText}
        </span>
      )}
    </label>
  );
};

export default withForwardRef(CheckBoxInput);
