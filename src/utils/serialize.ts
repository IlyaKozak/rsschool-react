function serialize(data: object) {
  return JSON.parse(JSON.stringify(data));
}

export default serialize;
