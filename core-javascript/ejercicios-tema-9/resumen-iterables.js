// Esquema/resumen iterables
//--------------------------
// Strings
// for...of: Ideal para iterar sobre cada caracter.
// Métodos de array como map, filter, reduce: Convirtiendo el string en un array primero.
const saludo = 'Hola, mundo!';
for (const letra of saludo) {
	console.log(letra);
}

// Arrays
// for...of: Para iterar sobre los elementos.
// for: Con un índice para acceder a cada elemento.
// Métodos de array como map, filter, reduce, forEach: Para realizar operaciones específicas.
const numeros = [1, 2, 3, 4, 5];
numeros.forEach((numero) => console.log(numero));

// Objetos
// Object.keys(): Devuelve un array con las claves.
// Object.values(): Devuelve un array con los valores.
// Object.entries(): Devuelve un array de pares clave-valor.
// for...in: Iterar sobre las propiedades enumerables (pero ten cuidado con las propiedades heredadas).
const persona = { nombre: 'Juan', edad: 30 };
for (const propiedad in persona) {
	console.log(propiedad, persona[propiedad]);
}

// Array de Objetos
// for...of: Iterar directamente sobre los objetos.
// forEach: Aplicar una función a cada objeto
const personas = [
	{ nombre: 'Ana', edad: 25 },
	{ nombre: 'Pedro', edad: 32 },
];
personas.forEach((persona) => console.log(persona.nombre));

// Objeto con Arrays
// Anidar bucles: Un bucle para las propiedades del objeto y otro para los elementos del array.
const cursos = {
	frontend: ['HTML', 'CSS', 'JavaScript'],
	backend: ['Node.js', 'Python'],
};
for (const curso in cursos) {
	for (const tecnologia of cursos[curso]) {
		console.log(tecnologia);
	}
}

// Ahora viene cuando me vuela la cabeza y aparece Symbol para hacer for..of en objetos
const range = {
	from: 1,
	to: 5,

	[Symbol.iterator]() {
		this.current = this.from;
		return this;
	},

	next() {
		if (this.current <= this.to) {
			return { done: false, value: this.current++ };
		}
		return { done: true };
	},
};

for (const num of range) {
	console.log(num); // 1, luego 2, 3, 4, 5
}

//Generadores
function* generateSequence() {
	yield 1;
	yield 2;
	yield 3;
}

let generator = generateSequence();

let one = generator.next();

console.log(JSON.stringify(one)); // {value: 1, done: false}

let two = generator.next();

console.log(JSON.stringify(two)); // {value: 2, done: false}

let three = generator.next();

console.log(JSON.stringify(three)); // {value: 3, done: true}

//try...catch

try {
	console.log('Inicio de intentos de prueba'); // (1) <--

	// ...no hay errores aquí

	console.log('Fin de las ejecuciones de try'); // (2) <--
} catch (err) {
	console.log('Se ignora catch porque no hay errores'); // (3)
}

try {
	console.log('Inicio de ejecuciones try'); // (1) <--

	lalala; // error, variable no está definida!

	console.log('Fin de try (nunca alcanzado)'); // (2)
} catch (err) {
	console.log(`¡Un error ha ocurrido!`); // (3) <--
}

let num = 35;

let diff, result;

function fib(n) {
	if (n < 0 || Math.trunc(n) != n) {
		throw new Error('Debe ser un número positivo y entero.');
	}
	return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

let start = Date.now();

try {
	result = fib(num);
} catch (err) {
	result = 0;
} finally {
	diff = Date.now() - start;
}

console.log(result || 'error ocurrido');

console.log(`la ejecución tomó ${diff}ms`);
