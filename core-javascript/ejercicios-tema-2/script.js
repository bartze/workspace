// Juguetea con las diferentes asignaciones para probar un poco los diferentes tipos.
const edad = 51; // Number
const nombre = 'Iñaki'; // String
const esMayorDeEdad = true; // Boolean
const valorNulo = null; // Null
let variableSinValor; // Undefined
const persona = { nombre: 'Iñaki', edad: 51 }; // Objeto
const marcasCoches = ['Seat', 'Audi', 'Toyota', 'Nissan', 'Ford', 'Dodge']; // Arrays
function saludar(nombre) { console.log(`Hola, ${nombre}!`); }
saludar('Iñaki'); // Función

// Evalúa los statements propuestos en el script “expressions.js” con nodejs
// EXPRESSIONS AND STATEMENTS

const nested_object = { property1: { stringie: 'hola' }, property2: 2.3 };
console.log(nested_object);

const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(matrix);

const sparseArray = [1,,,, 5];
console.log(sparseArray);

const suma = function (a, b) { return a * b; };
console.log(suma(4, 5));
console.log(suma(18, 229));

const a = { b: {} };
console.log(a.b?.c?.d); // => undefined

console.log(new Date());

let increment_var = 5;
increment_var++;
console.log(increment_var);

console.log(4 && 5);
console.log(0 && 2);
console.log(0 || 2);
console.log(0 || 0);

console.log('3' == 3);
console.log('3' === 3);

const point = { x: 1, y: 1 };
console.log('x' in point); // => true
console.log('z' in point); // => false
console.log('toString' in point); // => true

const data = [7, 8, 9];
console.log('0' in data); // => true
console.log(1 in data); // => true
console.log(3 in data); // => false

i = j = k = 0;
console.log(i, j, k);

let suerte = 1;
suerte++;
console.log(suerte);
++suerte;
console.log(suerte);

console.log(eval('3*5'));
