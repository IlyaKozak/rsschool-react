export type requestConfigType = {
  url: string;
  method?: string;
  headers?: { [key: string]: string };
  body?: { [key: string]: string };
};

export type callbackType = (data: { [key: string]: string | number | [] }) => void;
