'use strict';
const { Accounts } = require('../utils/tableNames');
const jsonData = require('../dataSources/accounts.json');

module.exports = {
  up: (queryInterface, _) => {
    return queryInterface.bulkInsert(Accounts, jsonData, {});
  },
  down: (queryInterface, _) => {
    return queryInterface.bulkDelete(Accounts, null, {});
  }
};
