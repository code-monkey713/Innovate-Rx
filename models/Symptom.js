const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Symptom extends Model {}

Symptom.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // is_positive: {
    //   type: DataTypes.BOOLEAN,
    //   allowNull: false,
    // },
    visit_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'visit',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'symptom',
  }
);

module.exports = Symptom;
