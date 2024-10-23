const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
	console.log('Nuevo cliente conectado');

	ws.on('message', (message) => {
		console.log('Mensaje recibido:', message);
		ws.send('Respuesta del servidor WebSocket');
	});

	ws.on('close', () => {
		console.log('Cliente desconectado');
	});
});

console.log('Servidor WebSocket escuchando en el puerto 8080');
