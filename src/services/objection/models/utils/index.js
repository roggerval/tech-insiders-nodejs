const transformJsonToArray = obj =>
  Object.keys(obj).map(key => ({ column: key, order: obj[key] }));

export { transformJsonToArray };
