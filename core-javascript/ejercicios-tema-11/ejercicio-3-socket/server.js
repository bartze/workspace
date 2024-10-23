// 3. Establece una comunicación con esta página web y printea su contenido
// (wss://socketsbay.com/wss/v2/2/demo/) Prueba a enviarle un mensaje y de
// nuevo printea su respuesta.

const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
	console.log('Nuevo cliente conectado');

	ws.on('message', (message) => {
		console.log('Mensaje recibido:', message);

		// Enviar un mensaje de vuelta al cliente
		ws.send(`Servidor dice: ${message}`);
	});

	ws.on('close', () => {
		console.log('Cliente desconectado');
	});
});

console.log('Servidor WebSocket escuchando en el puerto 8080');
