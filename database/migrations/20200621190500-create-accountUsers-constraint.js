'use strict';
const { AccountUsers } = require('../utils/tableNames.json');
module.exports = {
  up: (queryInterface, _) => {
    return queryInterface.addConstraint(
      AccountUsers,
      ['account_id', 'user_id'],
      {
        type: 'unique',
        name: 'accountUsersUniqueConstraint'
      }
    );
  },
  down: (queryInterface, _) => {
    return queryInterface.removeConstraint(
      AccountUsers,
      'accountUsersUniqueConstraint'
    );
  }
};
