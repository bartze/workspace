// 9. Escribir la función titulo(), la cual recibe un string y lo retorna convirtiendo
// la primera letra de cada palabra a mayúscula y las demás letras a
// minúscula, dejando inalterados los demás caracteres. Precondición: el
// separador de palabras es el espacio: " "

const convertirTitulo = (palabras) => {
	palabras = palabras.trim();
	if (palabras === '') {
		return '';
	}
	palabras = palabras
		.split(' ')
		.map((palabra) => palabra[0].toUpperCase() + palabra.slice(1).toLowerCase());
	return palabras.join(' ');
};

module.exports = { convertirTitulo };
