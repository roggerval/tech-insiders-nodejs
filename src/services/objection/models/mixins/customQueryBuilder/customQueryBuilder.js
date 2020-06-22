import { transformJsonToArray } from '../../utils';

export const customQueryBuilderMixin = Model => {
  class SDQueryBuilder extends Model.QueryBuilder {
    customOrderBy(orderBy, defaultValue) {
      if (orderBy) {
        return this.orderBy(transformJsonToArray(orderBy));
      } else {
        return this.orderBy(defaultValue);
      }
    }

    // override the normal groupBy function
    groupBy(groupBy) {
      if (Array.isArray(groupBy) && groupBy.length) {
        return this.groupBy(...groupBy);
      }
      return this;
    }

    customPagination(limit, offset) {
      if (limit) {
        this.limit(limit);
      }
      if (offset) {
        this.offset(offset);
      }
      return this;
    }

    applyOperators(jsonData) {
      if (jsonData) {
        const keys = Object.keys(jsonData);
        keys.forEach(key => {
          const comparisons = Object.keys(jsonData[key]);
          comparisons.forEach(actualComparison => {
            switch (actualComparison) {
              case 'greater':
                this.where(key, '>', jsonData[key][actualComparison]);
                break;
              case 'less':
                this.where(key, '<', jsonData[key][actualComparison]);
                break;
              case 'greaterEqual':
                this.where(key, '>=', jsonData[key][actualComparison]);
                break;
              case 'lessEqual':
                this.where(key, '<=', jsonData[key][actualComparison]);
                break;
              default:
                break;
            }
          });
        });
      }
      return this;
    }
  }
  return class extends Model {
    static get QueryBuilder() {
      return SDQueryBuilder;
    }

    static get isCustomQueryBuilder() {
      return true;
    }
  };
};
