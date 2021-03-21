const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Test extends Model {}

Test.init(
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
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'test',
  }
);

module.exports = Test;
