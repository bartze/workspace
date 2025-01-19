// repositories/users.js
const { User } = require('../models');

module.exports = {
	getAll() {
		return User.findAll();
	},
	findById(id) {
		return User.findByPk(id);
	},
	insert(user) {
		return User.create(user);
	},
	update(id, updatedData) {
		return User.update(updatedData, { where: { id } });
	},
	delete(id) {
		return User.destroy({ where: { id } });
	},
	canDelete(id) {
		// Implement check if user can be deleted
		return true; // Placeholder
	},
};
