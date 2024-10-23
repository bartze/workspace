// 2. Realiza una función que haga un fetch de la página de Google y gestione
// diferentes errores (prueba a desconectarte de internet cuando lanzas la
// aplicación, por ejemplo)

async function obtenerDatos() {
	try {
		const response = await fetch(`https://google.com`);
		if (!response.ok) {
			throw new Error('Error en la red');
		}
		const data = await response.text();
		console.log(data);
	} catch (error) {
		console.error('Hubo un problema con la solicitud Fetch:', error);
		return null;
	}
}

obtenerDatos();
