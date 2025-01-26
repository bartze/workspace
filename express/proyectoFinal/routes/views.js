const express = require('express');
const router = express.Router();
const { User, Teacher, Student } = require('../models');
const { isAuthenticated, isAdmin } = require('./login');

// Ruta para el error 401
router.get('/unauthorized', (req, res) => {
	res.status(401).render('error-401');
});

// Ruta para crear/editar usuario
router.get('/user/:id?', isAdmin, async (req, res) => {
	const userId = req.params.id;
	let user = userId ? await User.findByPk(userId) : null;

	res.render('user-form', {
		formTitle: user ? 'Editar Usuario' : 'Crear Usuario',
		formAction: user ? `/api/users/${userId}` : '/api/users',
		submitButtonText: user ? 'Actualizar' : 'Crear',
		user,
	});
});

// Ruta para mostrar estudiantes de un profesor por fecha de nacimiento
router.get('/teacher/students', isAuthenticated, async (req, res) => {
	try {
		const userId = req.session.user.id;
		const teacher = await Teacher.findOne({
			where: { user_id: userId },
			include: [
				{
					model: User,
					as: 'user',
					where: { active: true },
				},
				{
					model: Student,
					as: 'students',
					order: [['date_of_birth', 'ASC']],
				},
			],
		});

		if (!teacher) {
			return res.status(404).render('error', { message: 'Profesor no encontrado' });
		}

		res.render('students-list', {
			teacherName: `${teacher.name} ${teacher.last_name}`,
			students: teacher.students,
		});
	} catch (error) {
		console.error('Error fetching teacher and students:', error);
		res.status(500).render('error', { message: 'Error interno del servidor' });
	}
});

// Ruta para confirmación de acciones
router.get('/confirm/:action/:id', isAuthenticated, (req, res) => {
	const { action, id } = req.params;
	let message, actionUrl, method;

	switch (action) {
		case 'delete-user':
			message = '¿Estás seguro de que quieres eliminar este usuario?';
			actionUrl = `/api/users/${id}`;
			method = 'DELETE';
			break;
		case 'activate-user':
			message = '¿Estás seguro de que quieres activar este usuario?';
			actionUrl = `/api/users/${id}/active`;
			method = 'POST';
			break;
	}

	res.render('confirmation', {
		message,
		actionUrl,
		method,
		action: action.replace('-', ' '),
		cancelUrl: '/users',
	});
});

// Ruta para crear/editar estudiante
router.get('/student/:id?', isAuthenticated, async (req, res) => {
	const studentId = req.params.id;
	let student = studentId ? await Student.findByPk(studentId) : null;
	const teacherId = req.session.user.teacherId; // Asegúrate de guardar el teacherId en la sesión al iniciar sesión

	res.render('student-form', {
		formTitle: student ? 'Editar Estudiante' : 'Crear Estudiante',
		formAction: student ? `/api/students/${studentId}` : '/api/students',
		submitButtonText: student ? 'Actualizar' : 'Crear',
		student,
		teacherId,
	});
});

module.exports = router;
