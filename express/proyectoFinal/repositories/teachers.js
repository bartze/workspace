// repositories/teachers.js
const { Teacher } = require('../models');

module.exports = {
	getAll() {
		return Teacher.findAll();
	},
	findById(id) {
		return Teacher.findByPk(id);
	},
	insert(teacher) {
		return Teacher.create(teacher);
	},
	update(id, updatedData) {
		return Teacher.update(updatedData, { where: { id } });
	},
	delete(id) {
		return Teacher.destroy({ where: { id } });
	},
	canDelete(id) {
		// Implement check if teacher can be deleted
		return true; // Placeholder
	},
};
