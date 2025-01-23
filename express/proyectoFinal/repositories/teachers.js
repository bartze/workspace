// repositories/teachers.js
const { Teacher, Student } = require('../models');

module.exports = {
	// Obtener todos los profesores
	getAll() {
		return Teacher.findAll();
	},

	// Encontrar un profesor por ID
	findById(id) {
		return Teacher.findByPk(id);
	},

	// Insertar un nuevo profesor
	insert(teacherData) {
		return Teacher.create(teacherData);
	},

	// Actualizar un profesor existente
	update(id, updatedData) {
		return Teacher.update(updatedData, { where: { id } });
	},

	// Verificar si se puede eliminar un profesor
	async canDelete(teacherId) {
		try {
			const studentCount = await Student.count({
				where: { teacher_id: teacherId },
			});
			return studentCount === 0;
		} catch (error) {
			console.error('Error checking if teacher can be deleted:', error);
			throw error;
		}
	},

	// Eliminar un profesor
	async delete(teacherId) {
		try {
			const teacher = await Teacher.findByPk(teacherId);
			if (teacher) {
				await teacher.destroy();
				return true;
			} else {
				return false;
			}
		} catch (error) {
			console.error('Error deleting teacher:', error);
			throw error;
		}
	},
	// Encontrar un profesor por ID de usuario
	findByUserId(userId) {
		return Teacher.findOne({ where: { user_id: userId } });
	},
};
