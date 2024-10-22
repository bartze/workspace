// 6. Crea una función asíncrona que descargue la página principal de Google.

const fetch = require('node-fetch');

async function descargarPaginaGoogle() {
	try {
		const response = await fetch('https://www.google.com');
		const data = await response.text(); // Obtiene el HTML como texto
		return data;
	} catch (error) {
		throw new Error('Error al descargar la página: ' + error.message);
	}
}

module.exports = { descargarPaginaGoogle };
