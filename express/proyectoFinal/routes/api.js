const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const usersRepo = require('../repositories/users');
const bcrypt = require('bcrypt');

const JWT_SECRET = 'TuClaveMegaSecreta';

router.post('/api/token', async (req, res) => {
	const { username, password } = req.body;

	try {
		const user = await usersRepo.findByEmail(username);
		if (user) {
			const match = await bcrypt.compare(password, user.password);
			if (match) {
				const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '15m' });
				res.json({ token });
			} else {
				res.status(401).json({ message: 'Contraseña incorrecta' });
			}
		} else {
			res.status(401).json({ message: 'Usuario no encontrado' });
		}
	} catch (error) {
		console.error('Error al generar token:', error);
		res.status(500).json({ message: 'Error interno del servidor' });
	}
});

// Middleware para verificar JWT
const isAuth = (req, res, next) => {
	const authHeader = req.headers.authorization;
	if (!authHeader) {
		return res.status(401).json({ message: 'Falta el header de autorización' });
	}
	const token = authHeader.split(' ')[1];
	try {
		const decoded = jwt.verify(token, JWT_SECRET);
		req.user = decoded;
		next();
	} catch (error) {
		console.error('Token inválido:', error);
		res.status(401).json({ message: 'Token inválido' });
	}
};

// Ejemplo de ruta protegida
router.get('/api/protected', isAuth, (req, res) => {
	res.json({ message: 'Acceso concedido', user: req.user });
});

module.exports = router;
