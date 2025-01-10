const express = require('express');
const router = express.Router(); // Creamos una instancia de Router

// Middleware para todas las solicitudes a /task
router.use((req, res, next) => {
	console.log('Time (en task router):', Date.now());
	next();
});

// Middleware para cualquier tipo de solicitud HTTP en ruta /task/:id
router.use('/:id', (req, res, next) => {
	console.log('Request Type (en task router):', req.method);
	next();
});

// Ruta GET /task/:id
router.get('/:id', (req, res) => {
	res.send('ID (en task router): ' + req.params.id);
});

module.exports = router; // Exportamos el router
