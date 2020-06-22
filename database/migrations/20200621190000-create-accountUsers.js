'use strict';
const {
  Accounts,
  AccountUsers,
  Users,
  Policies
} = require('../utils/tableNames.json');
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(AccountUsers, {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.fn('uuid_generate_v4')
      },
      user_id: {
        allowNull: false,
        type: Sequelize.UUID,
        onUpdate: 'CASCADE',
        references: {
          model: Users,
          key: 'id'
        }
      },
      account_id: {
        allowNull: false,
        type: Sequelize.UUID,
        onUpdate: 'CASCADE',
        references: {
          model: Accounts,
          key: 'id'
        }
      },
      identity_policy_id: {
        type: Sequelize.UUID,
        onUpdate: 'CASCADE',
        references: {
          model: Policies,
          key: 'id'
        }
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING(100),
        defaultValue: 'active'
      },
      last_sign_in: {
        type: Sequelize.DATE(3)
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE(3),
        defaultValue: Sequelize.fn('NOW')
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE(3),
        defaultValue: Sequelize.fn('NOW')
      },
      deleted: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable(AccountUsers);
  }
};
