import React from 'react';

import { FieldValues } from 'react-hook-form';

export interface WithForwardRefProps {
  forwardRef: React.Ref<HTMLElement>;
}

export default function withForwardRef<Props extends WithForwardRefProps>(
  WrappedComponent: React.ComponentType<Props>
) {
  return React.forwardRef<HTMLElement, FieldValues>((props, ref) => {
    return <WrappedComponent {...(props as Props)} forwardRef={ref} />;
  });
}
