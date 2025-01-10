const express = require('express');
const router = express.Router();

// Middleware específico para el router user (opcional)
router.use((req, res, next) => {
	console.log('Time (en user router):', Date.now());
	next();
});

// Middleware para cualquier tipo de solicitud HTTP en ruta /user/:id
router.use('/:id', (req, res, next) => {
	console.log('Request Type (en user router):', req.method);
	next();
});

// Ruta GET /user/:id
router.get('/:id', (req, res) => {
	res.send('USER');
});

router.post('/', (req, res) => {
	let title = null;

	// Intentamos obtener el título de diferentes maneras
	if (req.body) {
		if (typeof req.body === 'object' && req.body.title) {
			title = req.body.title;
		} else if (typeof req.body === 'string') {
			try {
				const parsedBody = JSON.parse(req.body);
				if (parsedBody && parsedBody.title) {
					title = parsedBody.title;
				}
			} catch (error) {
				const match = req.body.match(/"title"\s*:\s*"([^"]*)"/);
				if (match) {
					title = match[1];
				}
			}
		}
	}

	if (title) {
		res.send(title);
	} else {
		res.status(400).send('No se encontró el campo "title" en la solicitud.');
	}
});

module.exports = router;
