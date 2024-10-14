//Esquema/resumen iterables
//--------------------------
// Strings
// for...of: Ideal para iterar sobre cada caracter.
// Métodos de array como map, filter, reduce: Convirtiendo el string en un array primero.
let saludo = 'Hola, mundo!';
for (const letra of saludo) {
	console.log(letra);
}

// Arrays
// for...of: Para iterar sobre los elementos.
// for: Con un índice para acceder a cada elemento.
// Métodos de array como map, filter, reduce, forEach: Para realizar operaciones específicas.
let numeros = [1, 2, 3, 4, 5];
numeros.forEach((numero) => console.log(numero));

// Objetos
// Object.keys(): Devuelve un array con las claves.
// Object.values(): Devuelve un array con los valores.
// Object.entries(): Devuelve un array de pares clave-valor.
// for...in: Iterar sobre las propiedades enumerables (pero ten cuidado con las propiedades heredadas).
let persona = { nombre: 'Juan', edad: 30 };
for (const propiedad in persona) {
	console.log(propiedad, persona[propiedad]);
}

// Array de Objetos
// for...of: Iterar directamente sobre los objetos.
// forEach: Aplicar una función a cada objeto
let personas = [
	{ nombre: 'Ana', edad: 25 },
	{ nombre: 'Pedro', edad: 32 },
];
personas.forEach((persona) => console.log(persona.nombre));

// Objeto con Arrays
// Anidar bucles: Un bucle para las propiedades del objeto y otro para los elementos del array.
let cursos = {
	frontend: ['HTML', 'CSS', 'JavaScript'],
	backend: ['Node.js', 'Python'],
};
for (const curso in cursos) {
	for (const tecnologia of cursos[curso]) {
		console.log(tecnologia);
	}
}

// Ahora viene cuando me vuela la cabeza y aparece Symbol para hacer for..of en objetos
let range = {
	from: 1,
	to: 5,

	[Symbol.iterator]() {
		this.current = this.from;
		return this;
	},

	next() {
		if (this.current <= this.to) {
			return { done: false, value: this.current++ };
		} else {
			return { done: true };
		}
	},
};

for (let num of range) {
	console.log(num); // 1, luego 2, 3, 4, 5
}
