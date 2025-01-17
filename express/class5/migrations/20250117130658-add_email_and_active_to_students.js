'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.addColumn('students', 'email', {
			type: Sequelize.STRING,
			allowNull: true,
		});
		await queryInterface.addColumn('students', 'active', {
			type: Sequelize.BOOLEAN,
			allowNull: false,
			defaultValue: true,
		});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.removeColumn('students', 'email');
		await queryInterface.removeColumn('students', 'active');
	},
};
