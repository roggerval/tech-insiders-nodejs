'use strict';
const { Policies } = require('../utils/tableNames.json');
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(Policies, {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.fn('uuid_generate_v4')
      },
      name: {
        type: Sequelize.STRING(100),
        unique: true,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      permissions: {
        type: Sequelize.JSONB,
        allowNull: false
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING(100),
        defaultValue: 'active'
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
  down: (queryInterface, _) => {
    return queryInterface.dropTable(Policies);
  }
};
