'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		static associate(models) {
			User.hasOne(models.Teacher, { foreignKey: 'user_id' });
		}
	}
	User.init(
		{
			email: DataTypes.STRING,
			password: DataTypes.STRING,
			type: DataTypes.STRING,
			active: DataTypes.BOOLEAN,
		},
		{
			sequelize,
			modelName: 'User',
			freezeTableName: true, // Esto se asegura que el nombre de la tabla permanezca 'User'
		},
	);
	return User;
};
