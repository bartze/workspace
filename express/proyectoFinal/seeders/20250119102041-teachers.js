'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			'teachers',
			[
				{
					dni: '11223344C',
					name: 'Conchita',
					last_name: 'Izaguirre',
					date_of_birth: '1980-05-15',
					user_id: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dni: '22334455D',
					name: 'Segundo',
					last_name: 'Barceló',
					date_of_birth: '1975-11-20',
					user_id: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{},
		);
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('teachers', null, {});
	},
};
