// CRUD para students
const express = require('express');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const { Student } = require('../models');
const students = require('../repositories/students');
const router = express.Router();

app.get('/', async (req, res) => {
	const allStudents = await students.getAll();
	res.json(allStudents);
});

app.get('/:id', async (req, res) => {
	const student = await students.findById(req.params.id);
	if (student) res.json(student);
	else res.status(404).send("Student doesn't exist");
});

app.post(
	'/',
	[
		body('name').notEmpty().withMessage('Name is required'),
		body('last_name').notEmpty().withMessage('Last name is required'),
		body('date_of_birth').isDate().withMessage('Invalid date format (YYYY-MM-DD)'),
		body('email')
			.isEmail()
			.withMessage('Invalid email format')
			.custom((value) => {
				return students.findByEmail(value).then((student) => {
					if (student) return Promise.reject('A user already exists with this email');
				});
			}),
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		const newStudent = await students.insert(req.body);
		res.json(newStudent);
	},
);

app.put('/:id', async (req, res) => {
	const updatedStudent = await students.update(req.params.id, req.body);
	res.json(updatedStudent);
});

app.delete('/:id', async (req, res) => {
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
