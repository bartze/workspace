'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class Teacher extends Model {
		static associate(models) {
			Teacher.belongsTo(models.User, { foreignKey: 'user_id' });
			Teacher.hasMany(models.Student, { foreignKey: 'teacher_id' });
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
			freezeTableName: true, // Esto se asegura que el nombre de la tabla permanezca 'teacher'
		},
	);
	return Teacher;
};
