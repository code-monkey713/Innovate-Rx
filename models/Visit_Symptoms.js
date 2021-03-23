const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Visit_Symptoms extends Model {}

Visit_Symptoms.init(
  {
    // id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   primaryKey: true,
    //   autoIncrement: true,
    visit_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'visit',
        key: 'id',
      },
    },
    stdmodel_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'stdmodel',
        key: 'id',
      },
    },
    is_positive: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    }
    // diagnosis_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'diagnosis',
    //     key: 'id',
    //   },
    // },
    // doctor_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'doctor',
    //     key: 'id',
    //   },
    // },
  },
  {
    sequelize,
    // timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'visit_symptoms',
  }
);

module.exports = Visit_Symptoms;
