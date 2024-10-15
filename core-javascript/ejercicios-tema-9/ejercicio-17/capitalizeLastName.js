function capitalizeLastName(fullName) {
	let result;

	try {
		// Verificar si el argumento es un string
		if (typeof fullName !== 'string') {
			throw new TypeError('El argumento debe ser un string.');
		}

		// Dividir el string en palabras
		const words = fullName.split(' ');

		// Verificar si el string tiene exactamente dos palabras
		if (words.length !== 2) {
			throw new Error('El string debe consistir de exactamente dos palabras.');
		}

		// Capitalizar la primera letra del primer nombre y todas las letras del apellido
		const firstName = words[0].charAt(0).toUpperCase() + words[0].slice(1).toLowerCase();
		const lastName = words[1].toUpperCase();

		result = `${firstName} ${lastName}`;
	} catch (error) {
		result = error.message;
	} finally {
		console.log('La función se ha ejecutado.');
	}

	return result;
}

module.exports = capitalizeLastName;
