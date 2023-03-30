export const authorRegisterOptions = {
  required: 'It is a mandatory field.',
  pattern: {
    value: /^[A-Z][a-zA-Z \.]*$/,
    message: 'Should start with Uppercase.\nAllowed: letters/spaces/dots.',
  },
};

export const titleRegisterOptions = {
  required: 'It is a mandatory field.',
  pattern: {
    value: /^[A-Z0-9].*$/,
    message: 'Starts with Uppercase/digit.\nAllowed: any chars.',
  },
};
