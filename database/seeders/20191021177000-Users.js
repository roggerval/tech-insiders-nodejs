'use strict';
const { Users } = require('../utils/tableNames');

module.exports = {
  up: (queryInterface, _) => {
    return queryInterface.bulkInsert(
      Users,
      [
        {
          id: '13f3393a-1027-44f1-a01c-55971546aec2',
          email: 'first.tester@gmail.com',
          name: 'First Tester Tester',
          first_name: 'Primer',
          last_name_1: 'Tester',
          last_name_2: 'Tester',
          password:
            '$2b$10$Q.ddVdBFjK6qVqVdeWULeuN96o9FOLYxXahNbWbvO.fK6SeN3jxPO' //prueba$gg
        },
        {
          id: '157bfe69-f02b-44fa-b72f-8856a21d9ac4',
          email: 'second.tester@gmail.com',
          name: 'Second Tester Tester',
          first_name: 'Second',
          last_name_1: 'Tester',
          last_name_2: 'Tester',
          password:
            '$2b$10$Q.ddVdBFjK6qVqVdeWULeuN96o9FOLYxXahNbWbvO.fK6SeN3jxPO', //prueba$gg
          phone_number: '999111222'
        },
        {
          id: '16fd2706-8baf-433b-82eb-8c7fada847da',
          email: 'third.tester@gmail.com',
          name: 'Third Tester Tester',
          first_name: 'Third',
          last_name_1: 'Tester',
          last_name_2: 'Tester',
          password:
            '$2b$10$Q.ddVdBFjK6qVqVdeWULeuN96o9FOLYxXahNbWbvO.fK6SeN3jxPO', //prueba$gg
          phone_number: '999888666'
        },
        {
          id: '37df23d9-6448-4abe-a022-9a1356f7c85e',
          email: 'Fou@example.com',
          name: 'Fourth Tester Tester',
          first_name: 'Fourth',
          last_name_1: 'Tester',
          last_name_2: 'Tester',
          password:
            '$2b$10$Q.ddVdBFjK6qVqVdeWULeuN96o9FOLYxXahNbWbvO.fK6SeN3jxPO' //prueba$gg
        }
      ],
      {}
    );
  },
  down: (queryInterface, _) => {
    return queryInterface.bulkDelete(Users, null, {});
  }
};
