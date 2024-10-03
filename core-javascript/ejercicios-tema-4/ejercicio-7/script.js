// 1.7. Página web ejecutada en bucle infinito que pregunta por una
// multiplicación y te responde con la solución mientras te vuelve a
// preguntar de nuevo. 

function multiplicarInfinitamente() {
    while (true) {
      let num1 = parseFloat(prompt("Ingresa el primer número a multiplicar:"));
      let num2 = parseFloat(prompt("Ingresa el segundo número a multiplicar:"));
  
      if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, introduce solo números.");
        continue; // Vuelve al inicio del bucle
      }
  
      const resultado = num1 * num2;
      alert(`El resultado de ${num1} * ${num2} es: ${resultado}`);
    }
  }
  multiplicarInfinitamente();