import { Model, mixin } from 'objection';
import {
  customQueryBuilderMixin,
  softDeleteMixin,
  timestampsMixin
} from '../mixins';

class Account extends mixin(Model, [
  customQueryBuilderMixin,
  softDeleteMixin(),
  timestampsMixin
]) {
  static get tableName() {
    return 'accounts';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name'],
      properties: {
        name: {
          type: 'string',
          maxlength: 255,
          column: 'name'
        },
        displayName: { type: 'string', maxlength: 255, column: 'display_name' },
        maxUsers: {
          type: 'number',
          column: 'max_users'
        },
        websiteUrl: {
          type: 'string',
          maxlength: 255,
          column: 'website_url'
        },
        status: {
          type: 'string',
          maxlength: 100,
          defaultValue: 'active',
          column: 'status'
        },
        organizationScpId: {
          type: 'string',
          format: 'uuid',
          column: 'organization_scp_id'
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
    const { Policy } = require('../Policy/Policy');

    return {
      accountUsers: {
        relation: Model.HasManyRelation,
        modelClass: AccountUser,
        join: {
          from: 'accounts.id',
          to: 'account_users.accountId'
        }
      },
      organizationScp: {
        relation: Model.BelongsToOneRelation,
        modelClass: Policy,
        join: {
          from: 'accounts.organizationScpId',
          to: 'policies.id'
        }
      }
    };
  }
}

export { Account };
