const db = require('./db');
module.exports = {
	getAll() {
		return db('students');
	},
	insert(data) {
		// Log the data to be inserted
		console.log('Inserting data:', data);
		return db('students').insert(data);
	},
	getById(id) {
		return db('students').where('id', id).first();
	},
};
