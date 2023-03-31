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

const validateImage = (files: FileList | null) => {
  const BYTES_IN_ONE_KB = 1024;
  const KB = 250;
  if (files?.length !== 1 || !files[0].type.startsWith('image/')) {
    return 'Please upload one image';
  }
  if (files[0].size > KB * BYTES_IN_ONE_KB) {
    return `Image size sould be less than ${KB}K`;
  }
  return true;
};

export const imageRegisterOptions = {
  required: 'It is a mandatory field.',
  validate: validateImage,
};
