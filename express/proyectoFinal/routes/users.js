// CRUD para users
const express = require('express');
const { User, Teacher } = require('../models');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const users = require('../repositories/users');
const router = express.Router();

router.get('/', async (req, res) => {
	const allUsers = await users.getAll();
	res.json(allUsers);
});

router.get('/:id', async (req, res) => {
	try {
		const user = await User.findByPk(req.params.id, {
			include: {
				model: Teacher,
				as: 'teacher', // Asegúrate de que coincide con la asociación definida
			},
		});
		if (user) {
			res.json(user);
		} else {
			res.status(404).send("User doesn't exist");
		}
	} catch (error) {
		res.status(500).send('Error fetching user with teacher association');
	}
});

router.post(
	'/',
	[
		body('email')
			.trim()
			.isEmail()
			.withMessage('Invalid email format')
			.custom((value) => {
				return users.findByEmail(value).then((user) => {
					if (user) {
						return Promise.reject('A user already exists with this email');
					}
				});
			}), // Validación de email con express validator y comprobación si existe
		body('password').notEmpty(),
		body('type').notEmpty().withMessage('Type is required'),
		body('teacher_id').optional(), // Incluye el `teacher_id` si se proporciona
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		req.body.password = await bcrypt.hash(req.body.password, 10);
		const newUser = await users.insert(req.body);

		// Si se proporciona un teacher_id, entonces asociar el profesor con el nuevo usuario
		if (req.body.teacher_id) {
			const teacher = await Teacher.findByPk(req.body.teacher_id);
			if (teacher) {
				teacher.user_id = newUser.id;
				await teacher.save();
			}
		}

		res.json(newUser);
	},
);

router.put('/:id', async (req, res) => {
	const updatedUser = await users.update(req.params.id, req.body);
	res.json(updatedUser);
});

router.delete('/:id', async (req, res) => {
	if (await users.canDelete(req.params.id)) {
		await users.delete(req.params.id);
		res.sendStatus(204);
	} else {
		res.status(400).send('User cannot be deleted because they have an associated teacher');
	}
});

module.exports = router;
