import graphqlFields from 'graphql-fields';

const getFields = info => {
  let attributes = Object.keys(
    graphqlFields(info, {}, { excludedFields: ['__typename'] })
  );
  return attributes;
};

const replaceFields = (array, replacements) => {
  const auxiliar = {};
  array.forEach(field => {
    if (replacements[field]) {
      auxiliar[replacements[field]] = replacements[field];
    } else {
      auxiliar[field] = field;
    }
  });
  return Object.keys(auxiliar);
};

const getMapFromIDs = (ids, objs, field) => {
  const objMap = {};
  objs.forEach(obj => {
    objMap[obj[field]] = obj;
  });
  return ids.map(id => objMap[id]);
};

const mappingByForeignIds = (ids, objects, field) => {
  const objMap = {};
  objects.forEach(obj => {
    if (objMap[obj[field]]) objMap[obj[field]].push(obj);
    else objMap[obj[field]] = [obj];
  });
  return ids.map(id => objMap[id]);
};

const addField = (array, field) => {
  let index = array.indexOf(field);
  if (index <= -1) {
    array.push(field);
  }
  return array;
};

export {
  getFields,
  mappingByForeignIds,
  replaceFields,
  addField,
  getMapFromIDs
};
