'use strict';
const { Users, Nationalities } = require('../utils/tableNames.json');
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(Users, {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.fn('uuid_generate_v4')
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING(255),
        unique: true
      },
      name: {
        type: Sequelize.STRING(255)
      },
      nickname: {
        type: Sequelize.STRING(255)
      },
      first_name: {
        type: Sequelize.STRING(255)
      },
      last_name_1: {
        type: Sequelize.STRING(255)
      },
      last_name_2: {
        type: Sequelize.STRING(255)
      },
      address_line_1: {
        type: Sequelize.STRING(255)
      },
      address_line_2: {
        type: Sequelize.STRING(255)
      },
      image_url: {
        type: Sequelize.STRING(255)
      },
      last_sign_in: {
        allowNull: false,
        type: Sequelize.DATE(3),
        defaultValue: Sequelize.fn('NOW')
      },
      password: {
        type: Sequelize.STRING(70)
      },
      phone_number: {
        type: Sequelize.STRING(30)
      },
      birthday: {
        type: Sequelize.DATE(3)
      },
      nationality_id: {
        type: Sequelize.STRING(5),
        allowNull: false,
        onUpdate: 'CASCADE',
        references: {
          model: Nationalities,
          key: 'alpha'
        },
        defaultValue: 'PE'
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
    return queryInterface.dropTable(Users);
  }
};
