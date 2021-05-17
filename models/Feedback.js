const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Feedback extends Model {}

Feedback.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    text: {
      type: DataTypes.STRING,
      validate: {

        len: [3]
    }
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    patient_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "patient",
        key: "id",
    }},
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "feedback",
  }
);

module.exports = Feedback;