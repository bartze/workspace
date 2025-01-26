const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
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

// Middleware para proteger rutas solo para usuarios de tipo profesor
function isAuthenticatedTeacher(req, res, next) {
	if (req.session.isLoggedIn && req.session.user.teacherId) {
		return next();
	}
	res.redirect('/login');
}

// Middleware para proteger rutas solo para usuarios de tipo admin
function isAdmin(req, res, next) {
	if (req.session.isLoggedIn && req.session.user.type === 'admin') {
		return next();
	}
	res.status(401).redirect('/unauthorized');
}

// Endpoint GET /login
router.get('/login', (req, res) => {
	res.render('login');
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
			console.log('Errores de validación:', errors.array());
			return res.status(400).render('login', { errors: errors.array() });
		}

		const { username, password } = req.body;
		console.log('Intento de login para:', username);

		try {
			const user = await usersRepo.findByEmail(username);
			console.log('Usuario encontrado:', user ? 'Sí' : 'No');

			if (user) {
				console.log('Comparando contraseñas...');
				const match = await bcrypt.compare(password, user.password);
				console.log('¿Contraseña coincide?', match);

				if (match) {
					console.log('Login exitoso, configurando sesión');
					const teacher = await teachersRepo.findByUserId(user.id);
					req.session.isLoggedIn = true;
					req.session.user = {
						id: user.id,
						email: user.email,
						type: user.type,
						teacherId: teacher ? teacher.id : null,
					};
					console.log('Sesión configurada:', req.session.user);
					return res.redirect('/home');
				} else {
					console.log('Contraseña incorrecta');
					return res.status(401).render('error-login');
				}
			} else {
				console.log('Usuario no encontrado');
				return res.status(401).render('error-login');
			}
		} catch (error) {
			console.error('Error en el proceso de login:', error);
			res.status(500).render('error-login');
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
				req.session.user.teacherId = teacher.id;
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
router.get('/users', isAuthenticated, isAdmin, async (req, res) => {
	try {
		const users = await usersRepo.getAll();
		res.render('users', { users });
	} catch (error) {
		console.error('Error en /users:', error);
		res.status(500).render('error', { message: 'Error interno del servidor' });
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

module.exports = {
	router: router,
	isAuthenticated: isAuthenticated,
	isAuthenticatedTeacher: isAuthenticatedTeacher,
	isAdmin: isAdmin,
};
