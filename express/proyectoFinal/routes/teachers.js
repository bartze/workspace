// CRUD para teachers
const express = require('express');
const { body, validationResult } = require('express-validator');
// const bcrypt = require('bcrypt');
// const { Teacher } = require('../models');
const teachers = require('../repositories/teachers');
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
	if (await teachers.canDelete(req.params.id)) {
		await teachers.delete(req.params.id);
		res.sendStatus(204);
	} else {
		res.status(400).send('Teacher cannot be deleted because they have associated students');
	}
});

module.exports = router;
