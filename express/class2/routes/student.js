const express = require('express');
const router = express.Router();

// Middleware específico para el router student (opcional)
router.use((req, res, next) => {
	console.log('Time (en student router):', Date.now());
	next();
});

// Ruta GET para obtener un estudiante por ID con validación
router.get('/:id', (req, res, next) => {
	const studentId = Number(req.params.id);
	if (isNaN(studentId)) {
		const error = new Error('Student ID inválido, introduzca un número');
		error.statusCode = 400;
		return next(error);
	}
	if (studentId > 99) {
		const error = new Error('Student ID no puede ser mayor a 99');
		error.statusCode = 400;
		return next(error);
	}
	if (studentId === 0) return next('route'); //Para que funcione el next('route')
	res.send(`Detalle del estudiante con ID: ${studentId}`);
});

router.get('/:id', (req, res) => {
	res.send('special');
});

module.exports = router;
