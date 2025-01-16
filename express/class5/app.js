// Se carga el módulo de Express
const express = require('express');
// Importamos body y validationResult
const { body, validationResult } = require('express-validator');
// Se cargan los módulos de la aplicación
const students = require('./repositories/students');
// Creo la aplicación Express
const app = express();
// Declaro el puerto de escucha
const port = 3000;

// Se define el middleware para el manejo de JSON
app.use(express.json());
// Se definen las rutas de la aplicación
app.get('/students', (req, res) => {
	students.getAll().then((results) => res.json(results));
});

// NUEVA RUTA PARA OBTENER UN ESTUDIANTE POR ID
app.get('/students/:id', (req, res) => {
	const studentId = parseInt(req.params.id); // Convertimos el id a número entero

	students
		.getById(studentId)
		.then((student) => {
			if (student) {
				res.json(student); // Devolvemos el estudiante si existe
			} else {
				res.status(404).send("Student doesn't exist"); // Devolvemos 404 si no existe
			}
		})
		.catch((err) => {
			console.error('Error getting student:', err);
			res.status(500).send('Internal Server Error'); // Manejo de errores
		});
});

app.post(
	'/students',
	[
		body('name').notEmpty().withMessage('Name is required'),
		body('last_name').notEmpty().withMessage('Last name is required'),
		body('date_of_birth').isISO8601().withMessage('Invalid date format (YYYY-MM-DD)'), // Validación de fecha
		body('email').isEmail().withMessage('Invalid email format'),
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		// Log the data we are trying to insert
		console.log('Data to be inserted:', req.body);

		try {
			const result = await students.insert(req.body);
			res.json({ success: true, message: 'Student was saved successfully' });
		} catch (err) {
			console.error('Error saving student:', err); // Log detailed error
			res.status(500).json({ success: false, message: 'Error saving student' });
		}
	},
);

// Defino la ruta que se llamará cuando se reciba una petición HTTP GET
// en la dirección '/'
// La función callback recibe una petición y una respuesta como argumentos
app.get('/', (req, res) => {
	// Se define la cabecera HTTP con el tipo de contenido
	res.set('Content-Type', 'text/plain');
	// Se responde, en el cuerpo de la respuesta con el mensaje "Hello World!!"
	res.status(200).send('Hello World!!');
});
// Creo el servidor en el puerto ${port}
app.listen(port, () => {
	// Se escribe la URL para el acceso al servidor
	console.log(`Example server listening on http://localhost:${port}`);
});
