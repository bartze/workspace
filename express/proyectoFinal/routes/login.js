const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt'); // Asegúrate de importar bcrypt
const usersRepo = require('../repositories/users');
const teachersRepo = require('../repositories/teachers');
const { body, validationResult } = require('express-validator');

// Middleware para proteger rutas
function isAuthenticated(req, res, next) {
	if (req.session.isLoggedIn) {
		return next();
	}
	res.redirect('/login');
}

// Endpoint GET /login
router.get('/login', (req, res) => {
	res.render('login'); // Renderiza la vista login.mustache
});

// Endpoint POST /login
router.post(
	'/login',
	[
		body('username').isEmail().withMessage('Email inválido'),
		body('password').notEmpty().withMessage('La contraseña es requerida'),
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			// Renderizar la vista de login con los errores
			return res.status(400).render('login', { errors: errors.array() });
		}

		const { username, password } = req.body;

		try {
			const user = await usersRepo.findByEmail(username);
			if (user) {
				const match = await bcrypt.compare(password, user.password);
				if (match) {
					// Configurar variables de sesión
					req.session.isLoggedIn = true;
					req.session.user = {
						id: user.id,
						email: user.email,
						type: user.type,
						// Otros datos que necesites, sin incluir la contraseña
					};
					// Redirigir a /home
					return res.redirect('/home');
				} else {
					return res.status(401).render('login', { error: 'Contraseña incorrecta' });
				}
			} else {
				return res.status(401).render('login', { error: 'Usuario no encontrado' });
			}
		} catch (error) {
			console.error('Error en el proceso de login:', error);
			res.status(500).render('login', { error: 'Error interno del servidor' });
		}
	},
);

// Endpoint GET /home
router.get('/home', isAuthenticated, async (req, res) => {
	try {
		const userType = req.session.user.type;
		if (userType === 'admin') {
			// Redirigir a /users si es admin
			return res.redirect('/users');
		} else {
			// Obtener datos del profesor asociado
			const teacher = await teachersRepo.findByUserId(req.session.user.id);
			if (teacher) {
				res.render('home', { user: teacher });
			} else {
				res.status(404).send('Profesor no encontrado');
			}
		}
	} catch (error) {
		console.error('Error en /home:', error);
		res.status(500).send('Error interno del servidor');
	}
});

// Acceso protegido solo para usuarios de tipo admin
router.get('/users', isAuthenticated, async (req, res) => {
	if (req.session.user.type !== 'admin') {
		return res.status(401).send('Acceso no autorizado');
	}
	try {
		const users = await usersRepo.getAll();
		res.render('users', { users });
	} catch (error) {
		console.error('Error en /users:', error);
		res.status(500).send('Error interno del servidor');
	}
});

// Endpoint POST /logout
router.post('/logout', (req, res) => {
	req.session.destroy((err) => {
		if (err) {
			console.error('Error al cerrar sesión:', err);
			return res.status(500).send('Error al cerrar sesión');
		}
		res.redirect('/login');
	});
});

module.exports = router;
