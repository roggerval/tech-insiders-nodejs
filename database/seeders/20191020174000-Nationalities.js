'use strict';
const { Nationalities } = require('../utils/tableNames.json');
const jsonData = require('../dataSources/nationalities.json');

module.exports = {
  up: (queryInterface, _) => {
    return queryInterface.bulkInsert(Nationalities, jsonData, {});
  },
  down: (queryInterface, _) => {
    return queryInterface.bulkDelete(Nationalities, null, {});
  }
};
