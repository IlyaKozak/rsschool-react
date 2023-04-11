import React from 'react';

import { InputProps } from '../../types/form';
import withForwardRef from '../../hoc/withForwardRef';

const RadioInput: React.FC<InputProps> = (props) => {
  const { validationText, items, name, onChange, forwardRef } = props;

  return (
    <div className={name}>
      {items?.map((item, idx) => {
        return (
          <label key={item} htmlFor={item}>
            {idx < items.length - 1 && item}
            <input
              type="radio"
              name={name}
              value={item}
              id={item}
              onChange={onChange}
              ref={forwardRef as React.Ref<HTMLInputElement>}
            />
            {idx === items.length - 1 && item}
          </label>
        );
      })}
      {validationText && (
        <span className="validation-text" title="validation requirements">
          {validationText}
        </span>
      )}
    </div>
  );
};

export default withForwardRef(RadioInput);
