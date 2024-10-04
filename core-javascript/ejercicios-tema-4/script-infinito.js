// 1.7. Página web ejecutada en bucle infinito que pregunta por una
// multiplicación y te responde con la solución mientras te vuelve a
// preguntar de nuevo.
const multiplicar = () => {
  const num1 = parseFloat(document.getElementById('numero1').value);
  const num2 = parseFloat(document.getElementById('numero2').value);
  const resultado = num1 * num2;
  document.getElementById('resultado').textContent = `El resultado de ${num1} * ${num2} es: ${resultado}`;
};
