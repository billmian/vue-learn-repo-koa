"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class order_info extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  order_info.init(
    {
      oid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      uid: DataTypes.INTEGER,
      rid: DataTypes.INTEGER,
      pid: DataTypes.INTEGER,
      order_time: DataTypes.STRING,
      state: DataTypes.STRING,
      price: DataTypes.INTEGER,
    },
    {
      timestamps: false,
      sequelize,
      modelName: "order_info",
      freezeTableName: true,
    }
  );
  return order_info;
};
