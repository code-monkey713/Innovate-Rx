const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Visit_Treatment extends Model {}

Visit_Treatment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    visit_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "visit",
        key: "id",
      },
    },
    treatment_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "treatment",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "visit_treatments",
  }
);

module.exports = Visit_Treatment;
