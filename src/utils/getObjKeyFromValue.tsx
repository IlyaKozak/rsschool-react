export default function getObjKeyFromValue<Type extends object, Key extends keyof Type>(
  obj: Type,
  value: Type[Key]
): Key | undefined {
  const indexOf = (Object.values(obj) as Array<Type[Key]>).indexOf(value);
  return (Object.keys(obj) as Array<Key>)[indexOf];
}
