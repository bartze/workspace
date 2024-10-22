// 7. Crea una función que sea asíncrona y que permita introducir una
// dirección y te devuelva su geocoding con este sistema de Google:
// https://developers.google.com/maps/documentation/geocoding/overview

async function geocoding(direccion) {
	try {
		const response = await fetch(
			`https://developers.google.com/maps/documentation/geocoding/overview${direccion}`,
		);
		const data = await response.text();
		return data;
	} catch (error) {
		throw new Error('Error al descargar la página: ' + error.message);
	}
}

module.exports = { geocoding };
