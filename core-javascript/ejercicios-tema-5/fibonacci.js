// 1. Define con una función recursiva cómo calcularías la serie de Fibonacci. Fn = Fn-1 + Fn-2

// function fibonacciRecursivo(n) {
//   if (n <= 1) {
//     return n;
//   }
//   return fibonacciRecursivo(n - 1) + fibonacciRecursivo(n - 2);
// }

// Función para imprimir los primeros n números de Fibonacci
// function imprimirFibonacci(n) {
//   for (let i = 0; i <= n; i++) {
//     console.log(fibonacciRecursivo(i));
//   }
// }

// imprimirFibonacci(20);

// Fibonacci Iván

// function fibonacci(numero) {
// 	let index = [0, 1, null];
// 	for (let i = 0; i <= numero; i++) {
// 		index[2] = index[0] + index[1];
// 		index[0] = index[1];
// 		index[1] = index[2];
// 	}
// 	return index[0];
// }
// console.log(fibonacci(10));

// function fibonacci(numero) {
// 	let index = [0, 1, null];
// 	console.log(index[0]);
// 	console.log(index[1]);
// 	for (let i = 2; i < numero; i++) {
// 		index[2] = index[0] + index[1];
// 		console.log(index[2]);
// 		index[0] = index[1];
// 		index[1] = index[2];
// 	}
// 	return index[1];
// }

// fibonacci(15);

function fibonacci(numero) {
  let [a, b] = [0, 1];
  console.log(a);
  if (numero > 1) console.log(b);
  for (let i = 2; i < numero; i++) {
    [a, b] = [b, a + b];
    console.log(b);
  }
  return b;
}

fibonacci(15);
