function capitalizeLastName(fullName) {
	let result;

	try {
		if (typeof fullName !== 'string') {
			throw new TypeError('El argumento debe ser un string.');
		}

		const words = fullName.split(' ');

		if (words.length !== 2) {
			throw new Error('El string debe consistir de exactamente dos palabras.');
		}

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
