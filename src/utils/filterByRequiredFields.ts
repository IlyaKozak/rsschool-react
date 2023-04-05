function filterByRequiredFields<Type extends object, Key extends keyof Type>(
  array: Array<Type>,
  requiredFields: Array<Key>
) {
  const filteredArray: Array<Type> = [];
  for (const item of array) {
    if (!requiredFields.every((field) => item.hasOwnProperty(field))) return;
    filteredArray.push(item);
  }
  return filteredArray;
}

export default filterByRequiredFields;
