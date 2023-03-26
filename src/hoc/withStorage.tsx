import React from 'react';

export interface WithStorageProps {
  getValue: () => string;
  setValue: (value: string) => void;
}

export default function withStorage<Props extends WithStorageProps>(
  WrappedComponent: React.ComponentType<Props>,
  storage: Storage,
  storageKey: string
) {
  function ComponentWithStorageProps(props: Omit<Props, keyof WithStorageProps>) {
    const getValue = () => {
      return storage.getItem(storageKey);
    };

    const setValue = (value: string) => {
      storage.setItem(storageKey, value);
    };

    return <WrappedComponent {...(props as Props)} getValue={getValue} setValue={setValue} />;
  }

  return ComponentWithStorageProps;
}
