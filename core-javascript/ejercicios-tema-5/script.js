//1. Define con una función recursiva cómo calcularías la serie de Fibonacci. Fn = Fn-1 + Fn-2

function fibonacciRecursivo(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacciRecursivo(n - 1) + fibonacciRecursivo(n - 2);
}

// Función para imprimir los primeros n números de Fibonacci
function imprimirFibonacci(n) {
  for (let i = 0; i <= n; i++) {
    console.log(fibonacciRecursivo(i));
  }
}

imprimirFibonacci(20);

 
