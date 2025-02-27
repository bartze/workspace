'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		static associate(models) {
			// Asociación con Teacher
			User.hasOne(models.Teacher, {
				foreignKey: 'user_id',
				as: 'teacher',
			});
		}
	}
	User.init(
		{
			email: { type: DataTypes.STRING, unique: true, allowNull: false },
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
