//1. Define con una función recursiva cómo calcularías la serie de Fibonacci. Fn = Fn-1 + Fn-2

const fibonacci = (n)=> {
    if (n <= 1) return n;
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
      const temp = a + b;
      a = b;
      b = temp;
      console.log(b+", ");
    }
    return b
  }
 fibonacci(20);

 
