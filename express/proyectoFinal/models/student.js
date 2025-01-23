'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class Student extends Model {
		static associate(models) {
			// Asociación con Teacher
			Student.belongsTo(models.Teacher, {
				foreignKey: 'teacher_id',
				as: 'teacher',
			});
		}
	}
	Student.init(
		{
			dni: { type: DataTypes.STRING, allowNull: false },
			name: { type: DataTypes.STRING, allowNull: false },
			last_name: { type: DataTypes.STRING, allowNull: false },
			date_of_birth: { type: DataTypes.DATE, allowNull: false },
			teacher_id: { type: DataTypes.INTEGER, allowNull: false },
		},
		{
			sequelize,
			modelName: 'Student',
			tableName: 'students',
		},
	);
	return Student;
};
