// Juguetea con las diferentes asignaciones para probar un poco los diferentes tipos.
let edad =51; //Number
let nombre = "Iñaki"; //String
let esMayorDeEdad = true; //Boolean
let valorNulo = null; //Null
let variableSinValor; //Undefined
let persona = {nombre: "Iñaki", edad: 51}; //Objeto
let marcasCoches = ["Seat", "Audi", "Toyota", "Nissan", "Ford", "Dodge"]; //Arrays
function saludar(nombre) {console.log("Hola, "+ nombre + "!");}
saludar("Iñaki"); //Función

// Evalúa los statements propuestos en el script “expressions.js” con nodejs
// EXPRESSIONS AND STATEMENTS

let nested_object = { property1: { stringie: "hola" }, property2: 2.3 };
console.log(nested_object);

let matrix = [[1,2,3], [4,5,6], [7,8,9]];
console.log(matrix);

let sparseArray = [1,,,,5];
console.log(sparseArray);

let suma = function(a, b) { return a * b; };
console.log(suma(4, 5));
console.log(suma(18, 229));

let a = { b: {} };
console.log(a.b?.c?.d);  // => undefined

console.log(new Date());

let increment_var = 5;
increment_var++;
console.log(increment_var);

console.log(4 && 5);
console.log(0 && 2);
console.log(0 || 2);
console.log(0 || 0);

console.log("3" == 3);
console.log("3" === 3);

let point = {x: 1, y: 1};
console.log("x" in point);               // => true
console.log("z" in point);               // => false
console.log("toString" in point);        // => true

let data = [7,8,9];
console.log("0" in data);                // => true
console.log(1 in data);                  // => true
console.log(3 in data);                  // => false

i = j = k = 0;
console.log(i, j, k);

let suerte = 1;
suerte++;
console.log(suerte);
++suerte;
console.log(suerte);

console.log(eval("3*5"));
