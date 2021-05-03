"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class receiving_info extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  receiving_info.init(
    {
      rid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      uid: DataTypes.INTEGER,
      province: DataTypes.STRING,
      city: DataTypes.STRING,
      address: DataTypes.STRING,
      consi_name: DataTypes.STRING,
      consi_tel: DataTypes.STRING,
    },
    {
      timestamps: false,
      sequelize,
      modelName: "receiving_info",
      freezeTableName: true,
    }
  );
  return receiving_info;
};
