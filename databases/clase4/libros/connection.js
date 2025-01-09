const { Sequelize } = require('sequelize');

const database = 'postgres'; //cambiar a proyectofinal
const username = 'postgres';
const password = 'changeme'; //cambiar a Tekken55%
const host = 'localhost';

const sequelize = new Sequelize(database, username, password, {
	host,
	dialect: 'postgres',
});

module.exports = {
	sequelize,
};
