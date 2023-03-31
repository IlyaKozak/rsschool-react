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

export const requiredRegisterOption = {
  required: 'It is a mandatory field.',
};

const validatePublishedDate = (publishedDate: Date) => {
  const today = new Date();
  const startYear = new Date('01-01-1970');

  return (
    (startYear <= publishedDate && publishedDate <= today) ||
    `Between ${startYear.toLocaleDateString()} and\n ${today.toLocaleDateString()}`
  );
};

export const publishedRegisterOptions = {
  required: 'It is a mandatory field.',
  validate: validatePublishedDate,
  valueAsDate: true,
};
