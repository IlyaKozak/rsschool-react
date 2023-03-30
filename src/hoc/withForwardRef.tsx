import React from 'react';

import { FieldValues } from 'react-hook-form';

export interface WithForwardRefProps {
  forwardRef: React.Ref<HTMLInputElement>;
}

export default function withForwardRef<Props extends WithForwardRefProps>(
  WrappedComponent: React.ComponentType<Props>
) {
  return React.forwardRef<HTMLInputElement, FieldValues>((props, ref) => {
    return <WrappedComponent {...(props as Props)} forwardRef={ref} />;
  });
}
