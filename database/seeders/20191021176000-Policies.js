'use strict';
const { Policies } = require('../utils/tableNames.json');

module.exports = {
  up: (queryInterface, _) => {
    return queryInterface.bulkInsert(
      Policies,
      [
        {
          id: '9852648f-e7d9-4723-806f-acf72f58fecd',
          name: 'Administrator',
          permissions: `[{
          "effect": "allow",
          "resource": ["*"],
          "action": ["*"]
          }]`,
          description: 'Administrator'
        },
        {
          id: 'ddf20b9c-da80-4cec-8f37-cabe741341af',
          name: 'Test',
          permissions: `[{
          "effect": "allow",
          "resource": ["*"],
          "action": ["get*"]
          }]`,
          description: 'Test'
        },
        {
          id: 'f51a9391-e824-4261-8a3a-689f83640116',
          name: 'Administrator just in case',
          permissions: `[{
          "effect": "allow",
          "resource": ["*"],
          "action": ["*"]
          }]`,
          description: 'Administrator just in case'
        }
      ],
      {}
    );
  },
  down: (queryInterface, _) => {
    return queryInterface.bulkDelete(Policies, null, {});
  }
};
