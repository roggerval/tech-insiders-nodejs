import { Model, mixin } from 'objection';
import { customQueryBuilderMixin, timestampsMixin } from '../mixins';

class Nationality extends mixin(Model, [
  customQueryBuilderMixin,
  timestampsMixin
]) {
  static get tableName() {
    return 'nationalities';
  }

  static get idColumn() {
    return 'alpha';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: [
        'alpha',
        'country',
        'iso',
        'numericalCode',
        'alpha2',
        'demonym',
        'demonym2'
      ],
      properties: {
        alpha: {
          type: 'string',
          column: 'alpha'
        },
        country: {
          type: 'string',
          column: 'country'
        },
        iso: {
          type: 'string',
          column: 'iso'
        },
        numericalCode: {
          type: 'number',
          column: 'numerical_code'
        },
        alpha2: {
          type: 'string',
          column: 'alpha2'
        },
        demonym: {
          type: 'string',
          column: 'demonym'
        },
        demonym2: {
          type: 'string',
          column: 'demonym2'
        },
        createdAt: {
          type: 'string',
          format: 'date-time',
          column: 'created_at'
        },
        updatedAt: {
          type: 'string',
          format: 'date-time',
          column: 'updated_at'
        }
      }
    };
  }

  static get relationMappings() {
    const { User } = require('../User/User');

    return {
      users: {
        relation: Model.HasManyRelation,
        modelClass: User,
        join: {
          from: 'nationalities.alpha',
          to: 'users.nationalityId'
        }
      }
    };
  }
}

export { Nationality };
