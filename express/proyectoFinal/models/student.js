'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class Student extends Model {
		static associate(models) {
			Student.belongsTo(models.Teacher, { foreignKey: 'teacher_id' });
		}
	}
	Student.init(
		{
			dni: DataTypes.STRING,
			name: DataTypes.STRING,
			last_name: DataTypes.STRING,
			date_of_birth: DataTypes.DATE,
			teacher_id: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: 'Student',
			tableName: 'students',
		},
	);
	return Student;
};
