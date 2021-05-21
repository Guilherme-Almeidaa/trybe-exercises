'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert(
      "Books",
      [
        {
          title: "Harry Potter",
          author: "J.J",
          pageQuantity: 354,
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP')
        },
        {
          title: "Senho dos Anéis",
          author: "J.J.J",
          pageQuantity: 20320,
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP')
        }
      ]
    )
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete("Books", null, {});
  }
};
