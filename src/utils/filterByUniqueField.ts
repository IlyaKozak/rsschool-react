function filterByUniqueField<Type extends object, Key extends keyof Type>(
  array: Array<Type>,
  uniqueField: Key
) {
  const itemsMap = new Map();
  for (const item of array) {
    itemsMap.set(item[uniqueField], item);
  }
  return [...itemsMap.values()];
}

export default filterByUniqueField;
