export const getAuthorValidationText = (author: string) => {
  const regexp = new RegExp(/^[A-Z][a-zA-Z \.]*$/);
  if (regexp.test(author)) {
    return null;
  }
  return 'Starts with Uppercase.\nAllowed: letters/spaces/dots';
};

export const getTitleValidationText = (title: string) => {
  const regexp = new RegExp(/^[A-Z0-9].*$/);
  if (regexp.test(title)) {
    return null;
  }
  return 'Starts with Uppercase/digit.\nAllowed: any chars';
};

export const getPublishedDateValidationText = (date: string) => {
  const today = new Date();
  const startYear = new Date('01-01-1970');
  const publishedDate = new Date(date);
  if (startYear <= publishedDate && publishedDate <= today) {
    return null;
  }
  return `Between ${startYear.toLocaleDateString()} and\n ${today.toLocaleDateString()}`;
};

export const getValidationText = (value: string) => {
  if (value !== '') {
    return null;
  }
  return 'Please choose an option';
};

export const getImageValidationText = (files: FileList | null) => {
  const BYTES_IN_ONE_KB = 1024;
  const KB = 250;
  if (files?.length !== 1 || !files[0].type.startsWith('image/')) {
    return 'Please upload one image';
  }
  if (files[0].size > KB * BYTES_IN_ONE_KB) {
    return `Image size sould be less than ${KB}K`;
  }
  return null;
};

export const getValidationRequiredText = (checked: boolean) =>
  checked ? null : 'This field is mandatory';
