"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class product_info extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  product_info.init(
    {
      pid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      product_name: DataTypes.STRING,
      price: DataTypes.INTEGER,
      picture: DataTypes.STRING,
      detail: DataTypes.STRING,
      restaurant_name: DataTypes.STRING,
    },
    {
      timestamps: false,
      sequelize,
      modelName: "product_info",
      freezeTableName: true,
    }
  );
  return product_info;
};
