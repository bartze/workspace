'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			'students',
			[
				{
					dni: '12345678A',
					name: 'Josefina',
					last_name: 'Foronda',
					date_of_birth: '1995-06-12',
					teacher_id: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dni: '87654321B',
					name: 'Leocadio',
					last_name: 'Gastón',
					date_of_birth: '2000-12-01',
					teacher_id: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{},
		);
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('Students', null, {});
	},
};
