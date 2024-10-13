// 1.7 Crea una clase para trabajar diferentes transformaciones de un string
// inicial con diferentes métodos:
// - Conversión de todo el string a array de caracteres uno por uno
// - La ordenación de los caracteres de manera aleatoria
// - La inversión del orden de caracteres
// - Quitar las vocales
// - Quitar las consonantes.
// - Array de palabras
// - Inversión del orden de las palabras del string

class TransformadorString {
	constructor(string) {
		this.string = string;
	}

	transformarAArray() {
		return Array.from(this.string);
	}

	ordenarAleatoriamente() {
		return this.transformarAArray().sort(() => Math.random() - 0.5);
	}

	invertirOrden() {
		return this.string.split('').reverse().join('');
	}

	quitarVocales() {
		return this.string.replace(/[aeiouAEIOU]/g, '');
	}

	quitarConsonantes() {
		return this.string.replace(/[^aeiouAEIOU\s]/g, '');
	}

	transformarAArrayDePalabras() {
		return this.string.split(' ');
	}

	invertirOrdenDePalabras() {
		return this.transformarAArrayDePalabras().reverse().join(' ');
	}
}

const transformador = new TransformadorString('Mandalorian tiene aventuras epicas en la galaxia');

console.log(transformador.transformarAArray());
console.log(transformador.ordenarAleatoriamente());
console.log(transformador.invertirOrden());
console.log(transformador.quitarVocales());
console.log(transformador.quitarConsonantes());
console.log(transformador.transformarAArrayDePalabras());
console.log(transformador.invertirOrdenDePalabras());

module.exports = TransformadorString;
