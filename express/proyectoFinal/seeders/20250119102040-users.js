'use strict';

/** @type {import('sequelize-cli').Migration} */
const bcrypt = require('bcrypt');

module.exports = {
	up: async (queryInterface, Sequelize) => {
		const hashedPasswordAdmin = await bcrypt.hash('adminpassword', 10);
		const hashedPasswordUser = await bcrypt.hash('userpassword', 10);

		await queryInterface.bulkInsert('users', [
			{
				email: 'admin@example.com',
				password: hashedPasswordAdmin,
				type: 'admin',
				active: true,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				email: 'user@example.com',
				password: hashedPasswordUser,
				type: 'user',
				active: true,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('users', null, {});
	},
};
