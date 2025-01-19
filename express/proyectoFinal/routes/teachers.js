// CRUD para teachers
const express = require('express');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const { Teacher } = require('../models');
const teachers = require('../repositories/teachers');
const router = express.Router();

app.get('/', async (req, res) => {
	const allTeachers = await teachers.getAll();
	res.json(allTeachers);
});

app.get('/:id', async (req, res) => {
	const teacher = await teachers.findById(req.params.id);
	if (teacher) res.json(teacher);
	else res.status(404).send("Teacher doesn't exist");
});

app.post(
	'/',
	[
		body('dni').notEmpty(),
		body('name').notEmpty(),
		body('last_name').notEmpty(),
		body('date_of_birth').isDate().withMessage('Invalid date format (YYYY-MM-DD)'),
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		const newTeacher = await teachers.insert(req.body);
		res.json(newTeacher);
	},
);

app.put('/:id', async (req, res) => {
	const updatedTeacher = await teachers.update(req.params.id, req.body);
	res.json(updatedTeacher);
});

app.delete('/:id', async (req, res) => {
	if (await teachers.canDelete(req.params.id)) {
		await teachers.delete(req.params.id);
		res.sendStatus(204);
	} else {
		res.status(400).send('Teacher cannot be deleted because they have associated students');
	}
});

module.exports = router;
