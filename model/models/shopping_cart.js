"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class shopping_cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  shopping_cart.init(
    {
      sid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      pid: DataTypes.INTEGER,
      product_name: DataTypes.STRING,
      product_nums: DataTypes.INTEGER,
      product_specification: DataTypes.STRING,
    },
    {
      timestamps: false,
      sequelize,
      modelName: "shopping_cart",
      freezeTableName: true,
    }
  );
  return shopping_cart;
};
