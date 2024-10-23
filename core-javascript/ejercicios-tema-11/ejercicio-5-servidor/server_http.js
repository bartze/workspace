// 5. Crea un servidor en javascript que sea capaz de abrir una
// conexión en tu ordenador local y que conteste siempre la misma
// información a cualquier página que intente acceder a él.
// Impleméntalo con protocolo http y con websockets. Asimismo,
// permite que loguee todo lo que va recibiendo.

const http = require('http');

const server = http.createServer((req, res) => {
	console.log(`Solicitud recibida: ${req.method} ${req.url}`);
	res.writeHead(200, { 'Content-Type': 'text/plain' });
	res.end('Respuesta del servidor HTTP\n');
});

const PORT = 3000;
server.listen(PORT, () => {
	console.log(`Servidor HTTP escuchando en el puerto ${PORT}`);
});
