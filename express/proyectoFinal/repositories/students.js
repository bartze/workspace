const { Student } = require('../models');

module.exports = {
	getAll() {
		return Student.findAll();
	},
	findById(id) {
		return Student.findByPk(id);
	},
	findByEmail(email) {
		return Student.findOne({ where: { email } });
	},
	insert(student) {
		return Student.create(student);
	},
	update(id, updatedData) {
		return Student.update(updatedData, { where: { id } });
	},
	delete(id) {
		return Student.destroy({ where: { id } });
	},
	canDelete(id) {
		return true; // No hay restricciones especifícas para borrar estudiantes
	},
	findByTeacherIdOrderedByDOB(teacherId) {
		return Student.findAll({
			where: { teacher_id: teacherId },
			order: [['date_of_birth', 'ASC']],
		});
	},
};
