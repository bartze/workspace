// 1. Declara una variable normal y una constante
const mensaje = 'Hola, mundo!';
const PI = 3.14159;
// 2. Declara una variable normal. Asígnala después a un número
let numero;
numero = 6;
// 3. Declara dos variables numéricas y declara una tercera con su suma
const numeroUno = 5;
const numeroDos = 8;
const suma = numeroUno + numeroDos;
console.log(suma);
// 4. Declara dos variables de string y declara una tercera con su suma
const palabraUno = 'Hola';
const palabraDos = ' Mundo!';
const concatena = palabraUno + palabraDos;
console.log(concatena);
// 5. Informate, ¿cómo se declara una clase?
// En JavaScript, una clase se declara utilizando la palabra clave class. La estructura básica es la siguiente:

// javascript
// Copiar código
// class NombreDeLaClase {
//     constructor(parametro1, parametro2) {
//         // Propiedades de la clase
//         this.propiedad1 = parametro1;
//         this.propiedad2 = parametro2;
//     }

//     // Métodos de la clase
//     metodoEjemplo() {
//         console.log('Este es un método de ejemplo.');
//     }
// }
// Ejemplo:
// javascript
// Copiar código
// class Persona {
//     constructor(nombre, edad) {
//         this.nombre = nombre;
//         this.edad = edad;
//     }

//     saludar() {
//         console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`);
//     }
// }

// Crear una instancia de la clase
// const persona1 = new Persona('Juan', 30);

// Llamar a un método
// persona1.saludar(); // Hola, me llamo Juan y tengo 30 años.
// Explicación:
// class NombreDeLaClase {}: Declara la clase.
// constructor: Es un método especial para inicializar las propiedades cuando se crea una instancia de la clase.
// this.propiedad: Hace referencia a las propiedades de la instancia.
// Métodos: Se declaran dentro de la clase para definir comportamientos (funciones) que las instancias de la clase pueden usar.
// Este es el método estándar de declarar clases en JavaScript, introducido en ES6.
