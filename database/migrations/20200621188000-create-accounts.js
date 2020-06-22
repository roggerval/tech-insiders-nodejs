'use strict';
const { Accounts, Policies } = require('../utils/tableNames.json');
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(Accounts, {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.fn('uuid_generate_v4')
      },
      name: {
        type: Sequelize.STRING(200)
      },
      display_name: {
        type: Sequelize.STRING(255)
      },
      max_users: {
        type: Sequelize.INTEGER
      },
      website_url: {
        type: Sequelize.STRING(255)
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING(100),
        defaultValue: 'active'
      },
      organization_scp_id: {
        type: Sequelize.UUID,
        onUpdate: 'CASCADE',
        references: {
          model: Policies,
          key: 'id'
        }
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
    return queryInterface.dropTable(Accounts);
  }
};
