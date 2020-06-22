import { Model, mixin } from 'objection';
import {
  customQueryBuilderMixin,
  softDeleteMixin,
  timestampsMixin
} from '../mixins';

class Policy extends mixin(Model, [
  customQueryBuilderMixin,
  softDeleteMixin(),
  timestampsMixin
]) {
  static get tableName() {
    return 'policies';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name', 'description', 'permissions'],
      properties: {
        name: { type: 'string', maxlength: 100, column: 'name' },
        description: {
          type: 'string',
          maxlength: 255,
          column: 'description'
        },
        permissions: {
          type: 'array',
          column: 'permissions',
          maxItems: 20,
          items: {
            type: 'object',
            maxProperties: 5,
            minProperties: 2,
            properties: {
              effect: { enum: ['allow', 'deny'] },
              principal: {
                oneOf: [
                  {
                    type: 'array',
                    maxItems: 20,
                    items: { type: 'string' }
                  },
                  { type: 'object' },
                  { type: 'string' },
                  { type: 'null' }
                ]
              },
              resource: {
                oneOf: [
                  {
                    type: 'array',
                    maxItems: 20,
                    items: { type: 'string' }
                  },
                  { type: 'string' },
                  { type: 'null' }
                ]
              },
              action: {
                oneOf: [
                  {
                    type: 'array',
                    maxItems: 20,
                    items: { type: 'string' }
                  },
                  { type: 'string' },
                  { type: 'null' }
                ]
              },
              notResource: {
                oneOf: [
                  {
                    type: 'array',
                    maxItems: 20,
                    items: { type: 'string' }
                  },
                  { type: 'string' },
                  { type: 'null' }
                ]
              },
              notAction: {
                oneOf: [
                  {
                    type: 'array',
                    maxItems: 20,
                    items: { type: 'string' }
                  },
                  { type: 'string' },
                  { type: 'null' }
                ]
              },
              condition: {
                oneOf: [
                  {
                    type: 'array',
                    maxItems: 20,
                    items: { type: 'object' }
                  },
                  { type: 'object' },
                  { type: 'null' }
                ]
              }
            }
          }
        },
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
    const { Account } = require('../Account/Account');
    const { AccountUser } = require('../AccountUser/AccountUser');

    return {
      accounts: {
        relation: Model.HasManyRelation,
        modelClass: Account,
        join: {
          from: 'policies.id',
          to: 'accounts.organizationScpId'
        }
      },
      accountUsers: {
        relation: Model.HasManyRelation,
        modelClass: AccountUser,
        join: {
          from: 'policies.id',
          to: 'account_users.identityPolicyId'
        }
      }
    };
  }
}

export { Policy };
