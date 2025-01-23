// CRUD para teachers
const express = require('express');
const { body, validationResult } = require('express-validator');
const teachers = require('../repositories/teachers');
const students = require('../repositories/students');
const users = require('../repositories/users');
const router = express.Router();

router.get('/', async (req, res) => {
	const allTeachers = await teachers.getAll();
	res.json(allTeachers);
});

router.get('/:id', async (req, res) => {
	const teacher = await teachers.findById(req.params.id);
	if (teacher) res.json(teacher);
	else res.status(404).send("Teacher doesn't exist");
});

router.post(
	'/',
	[
		body('dni').notEmpty(),
		body('name').notEmpty(),
		body('last_name').notEmpty(),
		body('date_of_birth')
			.trim()
			.custom((value) => {
				const [day, month, year] = value.split('-');
				if (
					day &&
					month &&
					year &&
					day.length === 2 &&
					month.length === 2 &&
					year.length === 4
				) {
					return true;
				}
				throw new Error('Invalid date format (DD-MM-YYYY)');
			}), // Validación de fecha sin express validator
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		// Convertir la fecha al formato ISO antes de insertar en la base de datos
		const [day, month, year] = req.body.date_of_birth.split('-');
		const isoDate = `${year}-${month}-${day}`;
		req.body.date_of_birth = isoDate;

		const newTeacher = await teachers.insert(req.body);
		res.json(newTeacher);
	},
);

router.put('/:id', async (req, res) => {
	const updatedTeacher = await teachers.update(req.params.id, req.body);
	res.json(updatedTeacher);
});

router.delete('/:id', async (req, res) => {
	try {
		const canDelete = await teachers.canDelete(req.params.id);
		if (canDelete) {
			const deleted = await teachers.delete(req.params.id);
			if (deleted) {
				res.sendStatus(204);
			} else {
				res.status(404).json({ message: "Teacher doesn't exist" });
			}
		} else {
			res.status(400).json({
				message: 'Teacher cannot be deleted because they have associated students',
			});
		}
	} catch (error) {
		console.error('Error deleting teacher:', error);
		res.status(500).json({ message: 'Internal Server Error' });
	}
});

// Obtener los estudiantes de un profesor por fecha de nacimiento
router.get('/:teacher_id/students', async (req, res) => {
	try {
		const teacherId = req.params.teacher_id;

		// Verificar si el profesor existe
		const teacher = await teachers.findById(teacherId);
		if (!teacher) {
			return res.status(404).json({ message: "Teacher doesn't exist" });
		}

		// Verificar si el usuario asociado al profesor está activo
		const user = await users.findById(teacher.user_id);
		if (!user || !user.active) {
			return res.status(401).json({ message: 'Associated user is not active' });
		}

		// Obtener los estudiantes del profesor, ordenados por fecha de nacimiento
		const studentsList = await students.findByTeacherIdOrderedByDOB(teacherId);

		res.json(studentsList);
	} catch (error) {
		console.error('Error fetching students for teacher:', error);
		res.status(500).json({ message: 'Internal Server Error' });
	}
});

module.exports = router;
