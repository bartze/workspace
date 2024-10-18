// 17.Define a function capitalize_last_name() that accepts as argument
// a string with a (single) first and a (single) last name, and returns a
// string in which only the first letter of the first name is uppercase,
// whereas all letters of the last name are uppercase; in otherwords,
// 'marisa tomei' becomes 'Marisa TOMEI'. (Tip: use str.split() to split
// a str into separate words.) If something other than a str object is
// passed as an argument, the function should raise a TypeError. (Tip:
// you can use isistance() to check whether an object is of a particular
// type.) If the str does not consist of exactly two words, the function
// should raise a ValueError.
function capitalizeLastName(fullName) {
	// Verificar si el argumento es un string
	if (typeof fullName !== 'string') {
		throw new TypeError('El argumento debe ser un string.');
	}

	// Dividir el string en palabras
	const words = fullName.split(' ');

	// Verificar si el string tiene exactamente dos palabras
	if (words.length !== 2) {
		throw new ValueError('El string debe consistir de exactamente dos palabras.');
	}

	// Capitalizar la primera letra del primer nombre y todas las letras del apellido
	const firstName = words[0].charAt(0).toUpperCase() + words[0].slice(1).toLowerCase();
	const lastName = words[1].toUpperCase();

	return `${firstName} ${lastName}`;
}

// Ejemplo de uso
console.log(capitalizeLastName('marisa tomei')); // Output: Marisa TOMEI

module.exports = { capitalizeLastName };
