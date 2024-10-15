// 5. Pedirle al usuario que ingrese un dígito y un número, después llamar a
// una función que diga el número de veces que aparece el dígito en el
// número.

const contarDigito = () => {
  const numero = document.getElementById('numero').value;
  const digito = document.getElementById('digito').value;

  if (digito) {
    const contador = numero.split(digito).length - 1;
    document.getElementById(
      'resultado',
    ).textContent = `El dígito ${digito} aparece ${contador} veces.`;
  } else {
    document.getElementById('resultado').textContent = '';
  }
};
