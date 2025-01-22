'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		static associate(models) {
			// Definimos la asociación con Teacher
			User.hasOne(models.Teacher, {
				foreignKey: 'user_id',
				as: 'teacher', // Alias para acceder más fácilmente
				onDelete: 'RESTRICT', // Evita borrar si hay asociación
			});
		}
	}
	User.init(
		{
			email: {
				type: DataTypes.STRING,
				unique: true,
				allowNull: false,
			},
			password: { type: DataTypes.STRING, allowNull: false },
			type: { type: DataTypes.STRING, allowNull: false },
			active: { type: DataTypes.BOOLEAN, defaultValue: true },
		},
		{
			sequelize,
			modelName: 'User',
			tableName: 'users',
		},
	);
	return User;
};
