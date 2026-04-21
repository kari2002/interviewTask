"use strict";

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("Messages", [
      {
        content: "Hello world",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "Recruitment task",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "RTK Query działa!",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("Messages", null, {});
  }
};