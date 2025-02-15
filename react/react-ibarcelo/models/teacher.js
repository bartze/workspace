"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Teacher extends Model {
    static associate(models) {
      // Asociación con User
      Teacher.belongsTo(models.User, {
        foreignKey: "user_id",
        as: "user",
        onDelete: "RESTRICT",
      });
      // Asociación con Student
      Teacher.hasMany(models.Student, {
        foreignKey: "teacher_id",
        as: "students",
      });
    }
  }
  Teacher.init(
    {
      dni: { type: DataTypes.STRING, allowNull: false },
      name: { type: DataTypes.STRING, allowNull: false },
      last_name: { type: DataTypes.STRING, allowNull: false },
      date_of_birth: { type: DataTypes.DATE, allowNull: false },
      user_id: { type: DataTypes.INTEGER, allowNull: true },
    },
    {
      sequelize,
      modelName: "Teacher",
      tableName: "teachers",
    }
  );
  return Teacher;
};
