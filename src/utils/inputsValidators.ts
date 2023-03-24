export const getAuthorValidationText = (author: string) => {
  const regexp = new RegExp(/^[A-Z][a-zA-Z \.]*$/);
  if (regexp.test(author)) {
    return null;
  }
  return 'Starts with Uppercase.\nAllowed: letters/spaces/dots';
};

export const getTitleValidationText = (title: string) => {
  const regexp = new RegExp(/^[A-Z0-9]\w*$/);
  if (regexp.test(title)) {
    return null;
  }
  return 'Starts with Uppercase/digit.\nAllowed: any chars';
};
