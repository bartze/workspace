// CRUD para users
const express = require('express');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const { User } = require('../models');
const users = require('../repositories/users');
const router = express.Router();

router.get('/', async (req, res) => {
	const allUsers = await users.getAll();
	res.json(allUsers);
});

router.get('/:id', async (req, res) => {
	const user = await users.findById(req.params.id);
	if (user) res.json(user);
	else res.status(404).send("User doesn't exist");
});

router.post(
	'/',
	[
		body('email').isEmail(),
		body('password').notEmpty(),
		body('type').notEmpty().withMessage('Type is required'),
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		req.body.password = await bcrypt.hash(req.body.password, 10);
		const newUser = await users.insert(req.body);
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
