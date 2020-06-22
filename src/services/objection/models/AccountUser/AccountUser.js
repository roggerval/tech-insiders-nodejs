import { Model, mixin } from 'objection';
import {
  customQueryBuilderMixin,
  softDeleteMixin,
  timestampsMixin
} from '../mixins';

class AccountUser extends mixin(Model, [
  customQueryBuilderMixin,
  softDeleteMixin(),
  timestampsMixin
]) {
  static get tableName() {
    return 'account_users';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['userId', 'accountId'],
      properties: {
        userId: { type: 'string', format: 'uuid', column: 'user_id' },
        accountId: { type: 'string', format: 'uuid', column: 'account_id' },
        identityPolicyId: {
          type: 'string',
          format: 'uuid',
          column: 'identity_policy_id'
        },
        status: {
          type: 'string',
          maxlength: 100,
          defaultValue: 'active',
          column: 'status'
        },
        lastSignIn: {
          type: 'string',
          format: 'date-time',
          column: 'last_sign_in'
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
    const { Account } = require('../Account/Account');
    const { Policy } = require('../Policy/Policy');
    const { User } = require('../User/User');

    return {
      account: {
        relation: Model.BelongsToOneRelation,
        modelClass: Account,
        join: {
          from: 'account_users.accountId',
          to: 'accounts.id'
        }
      },
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'account_users.userId',
          to: 'users.id'
        }
      },
      identityPolicy: {
        relation: Model.BelongsToOneRelation,
        modelClass: Policy,
        join: {
          from: 'account_users.identityPolicyId',
          to: 'policies.id'
        }
      }
    };
  }
}

export { AccountUser };
