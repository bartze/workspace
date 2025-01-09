// Se carga el módulo Express
const express = require('express');
// Se carga el módulo mustache-express
const mustacheExpress = require('mustache-express');
// Creo la aplicación Express
const app = express();
// Declaro el puerto de escucha
const port = process.env.PORT || 3000;

// Configuración del middleware para servir archivos estáticos
app.use(express.static('public'));

// Registro el motor de plantillas mustache
app.engine('html', mustacheExpress());

// Defino la carpeta de las vistas
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

// Defino la ruta que se llamará cuando se reciba una petición HTTP GET en la dirección '/'
// La función callback recibe una petición y una respuesta como argumentos
app.get('/', (req, res) => {
	// Se define la cabecera HTTP con el tipo de contenido
	// res.setHeader('Content-Type', 'text/plain');
	// Se responde la solicitud con el mensaje 'Hello World!'
	// res.status(200).send('Hello World!');
	res.render('home'); // Renderiza la nueva vista 'home.html'
});

// Defino la ruta que se llamará cuando se reciba una petición HTTP GET en la dirección '/user/:name'
app.get('/user/:name', (req, res) => {
	res.render('user', { title: 'User', name: req.params.name });
});

// Defino la ruta que se llamará cuando se reciba una petición HTTP GET en la dirección '/student/:id'
app.get('/student/:id', (req, res) => {
	res.render('student', { title: 'Student', id: req.params.id });
});

// Creo el servidor en el puerto ${port}
app.listen(port, () => {
	// Se escribe la URL para el acceso al servidor
	console.log(`Server listening on port http://localhost:${port}`);
});
