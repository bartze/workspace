'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class Teacher extends Model {
		static associate(models) {
			Teacher.belongsTo(models.User, { foreignKey: 'user_id' }); // Asocia Teacher con User
			Teacher.hasMany(models.Student, { foreignKey: 'teacher_id' }); // Usa `students` como alias único
		}
	}
	Teacher.init(
		{
			dni: DataTypes.STRING,
			name: DataTypes.STRING,
			last_name: DataTypes.STRING,
			date_of_birth: DataTypes.DATE,
			user_id: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: 'Teacher',
			tableName: 'teachers',
			freezeTableName: true,
		},
	);
	return Teacher;
};
