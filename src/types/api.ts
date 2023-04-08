import { Description, Excerpt, ResponseData } from './responseData';

export type requestConfigType = {
  url: string;
  method?: string;
  headers?: { [key: string]: string };
  body?: { [key: string]: string };
};

export type DataType = {
  docs: ResponseData[];
  description?: string | Description;
  excerpts?: Array<Excerpt>;
};

export type callbackType<T> = (data: T) => void;
