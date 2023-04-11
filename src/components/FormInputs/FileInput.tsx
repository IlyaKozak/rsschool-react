import React from 'react';

import withForwardRef from '../../hoc/withForwardRef';
import { InputProps } from '../../types/form';

const FileInput: React.FC<InputProps> = (props) => {
  const { text, validationText, name, onChange, forwardRef } = props;

  return (
    <label htmlFor={name}>
      {text}:
      <input
        type="file"
        id={name}
        data-testid={name}
        name={name}
        onChange={onChange}
        ref={forwardRef as React.RefObject<HTMLInputElement>}
      />
      {validationText && (
        <span className="validation-text" title="validation requirements">
          {validationText}
        </span>
      )}
    </label>
  );
};

export default withForwardRef(FileInput);
