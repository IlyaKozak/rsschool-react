import { ChangeHandler } from 'react-hook-form';

import { Card } from './card';

export interface InputProps {
  text?: string;
  validationText: string;
  items?: string[];
  name: string;
  forwardRef: React.Ref<HTMLElement>;
  onChange: ChangeHandler;
  onBlur: ChangeHandler;
}

export interface SearchProps {
  onSearch: (searchValue: string) => void;
}

export type FormProps = {
  onCardAdd: (card: Card) => void;
};
