const { Model, DataTypes } = require('sequelize');
const { Visit } = require('.');
const sequelize = require('../config/connection');

class STDmodel extends Model {}

STDmodel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    symptom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    test: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    diagnosis: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // visit_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'visit',
    //     key: 'id',
    //   }
    // }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'stdmodel',
  }
);

module.exports = STDmodel;
