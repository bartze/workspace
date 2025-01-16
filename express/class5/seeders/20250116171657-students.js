'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.bulkInsert(
			'students',
			[
				{
					name: 'John',
					last_name: 'Doe',
					date_of_birth: '1987-04-27',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Joaquin',
					last_name: 'Torres',
					date_of_birth: '2014-09-15',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{},
		);
	},
	async down(queryInterface, Sequelize) {
		return queryInterface.bulkDelete('students', null, {});
	},
};
