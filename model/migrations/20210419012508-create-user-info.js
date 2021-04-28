"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("user_infos", {
      uid: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      user_name: {
        type: Sequelize.STRING,
      },
      user_account: {
        type: Sequelize.STRING,
      },
      user_password: {
        type: Sequelize.STRING,
      },
      user_avatar: {
        type: Sequelize.STRING,
      },
      user_type: {
        type: Sequelize.STRING,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("user_infos");
  },
};
