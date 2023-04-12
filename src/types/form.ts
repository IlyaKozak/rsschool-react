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

export type FormProps = {
  onCardAdd: (card: Card) => void;
};
