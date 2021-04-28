"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("order_infos", {
      oid: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      uid: {
        type: Sequelize.INTEGER,
      },
      rid: {
        type: Sequelize.INTEGER,
      },
      sid: {
        type: Sequelize.INTEGER,
      },
      order_time: {
        type: Sequelize.STRING,
      },
      state: {
        type: Sequelize.STRING,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("order_infos");
  },
};
