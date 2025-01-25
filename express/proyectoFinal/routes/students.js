// CRUD para students
const express = require('express');
const { body, validationResult } = require('express-validator');
const students = require('../repositories/students');
const router = express.Router();

router.get('/', async (req, res) => {
	const allStudents = await students.getAll();
	res.json(allStudents);
});

router.get('/:id', async (req, res) => {
	const student = await students.findById(req.params.id);
	if (student) res.json(student);
	else res.status(404).send("Student doesn't exist");
});

router.post(
	'/',
	[
		body('name').notEmpty().withMessage('Name is required'),
		body('last_name').notEmpty().withMessage('Last name is required'),
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

		const newStudent = await students.insert(req.body);
		res.json(newStudent);
	},
);

router.put('/:id', async (req, res) => {
	const updatedStudent = await students.update(req.params.id, req.body);
	res.json(updatedStudent);
});

router.delete('/:id', async (req, res) => {
	if (await students.canDelete(req.params.id)) {
		await students.delete(req.params.id);
		res.sendStatus(204);
	} else {
		res.status(400).send(
			'Student cannot be deleted because they are associated with a teacher',
		);
	}
});

module.exports = router;
