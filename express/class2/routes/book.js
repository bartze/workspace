const express = require('express');
const router = express.Router();

// Middleware específico para este router (se ejecuta para todas las rutas de libros)
router.use((req, res, next) => {
	console.log('Time (en book router):', Date.now());
	next();
});

// Ruta GET para obtener todos los libros
router.get('/', (req, res) => {
	res.send('Lista de libros');
});

// Ruta GET para obtener un libro por ID
router.get('/:id', (req, res) => {
	const bookId = req.params.id;
	res.send(`Detalle del libro con ID: ${bookId}`);
});

// Ruta POST para crear un nuevo libro
router.post('/', (req, res) => {
	res.send('Creando un nuevo libro');
});

// Ruta PUT para actualizar un libro
router.put('/:id', (req, res) => {
	const bookId = req.params.id;
	res.send(`Actualizando el libro con ID: ${bookId}`);
});

// Ruta DELETE para eliminar un libro
router.delete('/:id', (req, res) => {
	const bookId = req.params.id;
	res.send(`Eliminando el libro con ID: ${bookId}`);
});

module.exports = router;
