'use strict';
module.exports = {
  up: (queryInterface, _) => {
    return queryInterface.sequelize.query(
      'CREATE EXTENSION IF NOT EXISTS "uuid-ossp";'
    );
  },
  down: (queryInterface, _) => {
    return queryInterface.sequelize.query(
      'DROP EXTENSION IF EXISTS "uuid-ossp";'
    );
  }
};
