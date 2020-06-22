'use strict';
const { Nationalities } = require('../utils/tableNames.json');
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(Nationalities, {
      alpha: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING(5)
      },
      country: {
        type: Sequelize.STRING
      },
      iso: {
        type: Sequelize.STRING
      },
      numerical_code: {
        type: Sequelize.INTEGER
      },
      alpha2: {
        type: Sequelize.STRING
      },
      demonym: {
        type: Sequelize.STRING
      },
      demonym2: {
        type: Sequelize.STRING,
        allowNull: false
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
      }
    });
  },
  down: (queryInterface, _) => {
    return queryInterface.dropTable(Nationalities);
  }
};
