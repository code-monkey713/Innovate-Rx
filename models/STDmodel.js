const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class STDmodel extends Model {}

STDmodel.init(
  {
    // id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   primaryKey: true,
    //   autoIncrement: true,
    // },
    symptom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    test: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // diagnosis: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
  },
  {
    sequelize,
    // timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'stdmodel',
  }
);

module.exports = STDmodel;
