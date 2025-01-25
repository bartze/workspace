// CRUD para users
const express = require('express');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const usersRepo = require('../repositories/users');
const router = express.Router();

router.get('/', async (req, res) => {
	try {
		const allUsers = await usersRepo.getAll();
		res.json(allUsers);
	} catch (error) {
		res.status(500).send('Error fetching users');
	}
});

router.get('/:id', async (req, res) => {
	try {
		const user = await usersRepo.findById(req.params.id);
		if (user) {
			res.json(user);
		} else {
			res.status(404).send("User doesn't exist");
		}
	} catch (error) {
		res.status(500).send('Error fetching user');
	}
});

router.post(
	'/',
	[
		body('email')
			.trim()
			.isEmail()
			.withMessage('Invalid email format')
			.custom(async (value) => {
				try {
					const user = await usersRepo.findByEmail(value);
					if (user) {
						throw new Error('A user already exists with this email');
					}
				} catch (error) {
					console.error('Error during email validation:', error);
					throw new Error('Internal Server Error during validation');
				}
			}),

		body('password').notEmpty().withMessage('Password is required'),
		body('type').notEmpty().withMessage('Type is required'),
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		try {
			const hashedPassword = await bcrypt.hash(req.body.password, 10);
			const newUser = await usersRepo.insert({
				...req.body,
				password: hashedPassword,
			});
			// res.status(201).json(newUser);
			res.redirect('/users');
		} catch (error) {
			res.status(500).send('Error creating user');
		}
	},
);

router.put('/:id', async (req, res) => {
	try {
		const updatedUser = await usersRepo.update(req.params.id, req.body);
		res.json(updatedUser);
	} catch (error) {
		res.status(500).send('Error updating user');
	}
});

router.delete('/:id', async (req, res) => {
	try {
		const result = await usersRepo.deleteUser(req.params.id);
		if (result.success) {
			res.status(204).send();
		} else if (result.message === 'User not found') {
			res.status(404).json({ message: result.message });
		} else {
			res.status(400).json({ message: result.message });
		}
	} catch (error) {
		console.error('Error deleting user:', error);
		res.status(500).json({ message: 'Internal Server Error' });
	}
});

// GET /users/:id/active para verificar si el usuario exitste, actualiza active a true y devovlerá datos actualizados
router.get('/:id/active', async (req, res) => {
	try {
		const user = await usersRepo.findById(req.params.id);
		if (user) {
			res.json({ active: user.active });
		} else {
			res.status(404).json({ message: "User doesn't exist" });
		}
	} catch (error) {
		console.error('Error fetching user active status:', error);
		res.status(500).json({ message: 'Internal Server Error' });
	}
});

// POST /users/:id/active para verificar si el usuario exitste, actualiza active a true y devovlerá datos actualizados
router.post('/:id/active', async (req, res) => {
	try {
		const user = await usersRepo.findById(req.params.id);
		if (user) {
			user.active = true;
			await user.save();
			res.json(user);
		} else {
			res.status(404).json({ message: "User doesn't exist" });
		}
	} catch (error) {
		console.error('Error updating user active status:', error);
		res.status(500).json({ message: 'Internal Server Error' });
	}
});

module.exports = router;
