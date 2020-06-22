import { Model, mixin } from 'objection';
import {
  customQueryBuilderMixin,
  softDeleteMixin,
  timestampsMixin
} from '../mixins';

class User extends mixin(Model, [
  customQueryBuilderMixin,
  softDeleteMixin(),
  timestampsMixin
]) {
  static get tableName() {
    return 'users';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['email'],
      properties: {
        id: { type: 'string', format: 'uuid', column: 'id' },
        email: {
          type: 'string',
          maxLength: 255,
          format: 'email',
          column: 'email'
        },
        name: {
          column: 'name',
          oneOf: [{ type: 'string', maxLength: 255 }, { type: 'null' }]
        },
        nickname: {
          column: 'nickname',
          oneOf: [{ type: 'string', maxLength: 255 }, { type: 'null' }]
        },
        firstName: {
          column: 'first_name',
          oneOf: [{ type: 'string', maxLength: 255 }, { type: 'null' }]
        },
        lastName1: {
          column: 'last_name_1',
          oneOf: [{ type: 'string', maxLength: 255 }, { type: 'null' }]
        },
        lastName2: {
          column: 'last_name_2',
          oneOf: [{ type: 'string', maxLength: 255 }, { type: 'null' }]
        },
        addressLine1: {
          column: 'address_line_1',
          oneOf: [{ type: 'string', maxLength: 255 }, { type: 'null' }]
        },
        addressLine2: {
          column: 'address_line_2',
          oneOf: [{ type: 'string', maxLength: 255 }, { type: 'null' }]
        },
        imageUrl: {
          column: 'image_url',
          oneOf: [{ type: 'string', maxLength: 255 }, { type: 'null' }]
        },
        lastSignIn: {
          type: 'string',
          format: 'date-time',
          column: 'last_sign_in'
        },
        password: {
          column: 'password',
          oneOf: [{ type: 'string', maxLength: 255 }, { type: 'null' }]
        },
        phoneNumber: {
          column: 'phone_number',
          oneOf: [{ type: 'string', maxLength: 255 }, { type: 'null' }]
        },
        birthday: {
          column: 'birthday',
          oneOf: [{ type: 'string', format: 'date' }, { type: 'null' }]
        },
        nationalityId: { column: 'nationality_id', type: 'string' },
        status: {
          type: 'string',
          maxlength: 100,
          defaultValue: 'active',
          column: 'status'
        },
        deleted: {
          type: 'boolean',
          defaultValue: false,
          column: 'deleted'
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
    const { AccountUser } = require('../AccountUser/AccountUser');
    const { Nationality } = require('../Nationality/Nationality');

    return {
      nationality: {
        relation: Model.BelongsToOneRelation,
        modelClass: Nationality,
        join: {
          from: 'users.nationalityId',
          to: 'nationalities.alpha'
        }
      },
      accountUser: {
        relation: Model.HasOneRelation,
        modelClass: AccountUser,
        join: {
          from: 'users.id',
          to: 'account_users.userId'
        }
      }
    };
  }
}

export { User };
