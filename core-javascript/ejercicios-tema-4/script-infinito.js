const multiplicar = () => {
    const num1 = parseFloat(document.getElementById('numero1').value);
    const num2 = parseFloat(document.getElementById('numero2').value);
    const resultado = num1 * num2;
    document.getElementById('resultado').textContent = `El resultado de ${num1} * ${num2} es: ${resultado}`;
  };