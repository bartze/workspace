const express = require('express');
const { body, validationResult } = require('express-validator');
const students = require('./repositories/students');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/students', (req, res) => {
	students.getAll().then((results) => res.json(results));
});

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
		body('date_of_birth')
			.trim()
			.custom((value) => {
				const [day, month, year] = value.split('-');
				if (
					day &&
					month &&
					year &&
					day.length === 2 &&
					month.length === 2 &&
					year.length === 4
				) {
					return true;
				}
				throw new Error('Invalid date format (DD-MM-YYYY)');
			}), // Validación de fecha sin express validator
		body('email')
			.trim()
			.isEmail()
			.withMessage('Invalid email format')
			.custom((value) => {
				return students.findByEmail(value).then((student) => {
					if (student) {
						return Promise.reject('A user already exists with this email');
					}
				});
			}), // Validación de email con express validator y comprobación si existe
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

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

app.get('/', (req, res) => {
	res.set('Content-Type', 'text/plain');
	res.status(200).send('Hello Sequelize!!');
});

app.listen(port, () => {
	console.log(`Example server listening on http://localhost:${port}`);
});
