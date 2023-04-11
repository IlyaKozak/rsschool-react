import React from 'react';

import withForwardRef from '../../hoc/withForwardRef';
import { InputProps } from '../../types/form';

const SelectInput: React.FC<InputProps> = (props) => {
  const { text, validationText, items, name, onChange, forwardRef } = props;

  return (
    <label htmlFor={name}>
      <span>{text}:</span>
      <select
        id={name}
        name={name}
        onChange={onChange}
        ref={forwardRef as React.Ref<HTMLSelectElement>}
      >
        <option value="">-- choose --</option>
        {items?.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
      {validationText && (
        <span className="validation-text" title="validation requirements">
          {validationText}
        </span>
      )}
    </label>
  );
};

export default withForwardRef(SelectInput);
