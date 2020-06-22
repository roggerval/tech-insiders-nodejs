'use strict';
const { AccountUsers } = require('../utils/tableNames');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      AccountUsers,
      [
        {
          id: '4b9c36ac-6dbf-4b87-bdce-3f6e8689014b',
          user_id: '13f3393a-1027-44f1-a01c-55971546aec2',
          account_id: '38bf7011-813f-4b48-bfe6-dda74f111bb7',
          identity_policy_id: '9852648f-e7d9-4723-806f-acf72f58fecd'
        },
        {
          id: '552f9f75-5b76-468d-b40b-e1f6366e3a91',
          user_id: '157bfe69-f02b-44fa-b72f-8856a21d9ac4',
          account_id: '38bf7011-813f-4b48-bfe6-dda74f111bb7',
          identity_policy_id: 'ddf20b9c-da80-4cec-8f37-cabe741341af'
        },
        {
          id: '0821db3e-bca7-4955-99c4-2419e374cd01',
          user_id: '37df23d9-6448-4abe-a022-9a1356f7c85e',
          account_id: 'a4829372-8b9d-4674-a8f6-48d77569b2a4',
          identity_policy_id: 'ddf20b9c-da80-4cec-8f37-cabe741341af'
        },
        {
          id: '1fa8d36a-4f69-4238-ad2f-c791dd6c6c6e',
          user_id: '16fd2706-8baf-433b-82eb-8c7fada847da',
          account_id: '0e6472f0-f9e0-4d24-8310-6167797e0c84',
          identity_policy_id: 'f51a9391-e824-4261-8a3a-689f83640116'
        }
      ],
      {}
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(AccountUsers, null, {});
  }
};
