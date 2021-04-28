"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user_info extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user_info.init(
    {
      uid: DataTypes.INTEGER,
      user_name: DataTypes.STRING,
      user_account: DataTypes.STRING,
      user_password: DataTypes.STRING,
      user_avatar: DataTypes.STRING,
      user_type: DataTypes.STRING,
    },
    {
      timestamps: false,
      freezeTableName: true,
      sequelize,
      modelName: "user_info",
    }
  );
  return user_info;
};
