import * as models from '../models';

export default () =>
  Object.keys(models).reduce((mapping, modelClass) => {
    const { properties } = models[modelClass].jsonSchema;
    Object.keys(properties).forEach(propName => {
      mapping[properties[propName].column] = propName;
    });
    return mapping;
  }, {});
