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
	canDelete: async (id) => {
		const teacher = await Teacher.findByPk(id, {
			include: {
				model: Student,
				as: 'students',
			},
		});
		return teacher.students.length === 0; // Solo puede ser borrado si no tiene estudiantes asociados
	},
};
