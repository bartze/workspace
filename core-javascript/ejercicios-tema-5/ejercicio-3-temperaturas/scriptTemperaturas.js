// 3. Crea una función que convierta de Farenheit a Celsius, y si quieres que
// convierta de Celsius a Farenheit, y otra tercera que haga las dos cosas
// dependiendo el input.
const convertirFarenheitACelsius = (temperaturaFarenheit) => {
  temperaturaFarenheit = parseFloat(document.getElementById('temp1').value);
  temperaturaCelsius = (temperaturaFarenheit - 32) * 5 / 9;
  document.getElementById('resultado1').textContent = `${temperaturaFarenheit}ºF son ${temperaturaCelsius}ºC`;
};
const convertirCelsiusAFarenheit = (temperaturaCelsius) => {
  temperaturaCelsius = parseFloat(document.getElementById('temp2').value);
  temperaturaFarenheit = (temperaturaCelsius * 9 / 5) + 32;
  document.getElementById('resultado2').textContent = `${temperaturaCelsius}ºC son ${temperaturaFarenheit}ºF`;
};
// Función para convertir según la unidad ingresada (F o C)
const convertirTemperatura = () => {
  // Obtener el valor del input
  const input = document.getElementById('temp').value;

  // Regex para detectar número seguido de 'C' o 'F'
  const regex = /^([-+]?\d*\.?\d+)([CF])$/i;

  const match = input.match(regex);

  if (match) {
    const temperatura = parseFloat(match[1]); // Extraer la parte numérica
    const unidad = match[2].toUpperCase(); // Extraer la unidad (C o F)

    if (unidad === 'F') {
      // Convertir de Fahrenheit a Celsius
      const celsius = (temperatura - 32) * 5 / 9;
      document.getElementById('resultado').textContent = `${temperatura}ºF son ${celsius.toFixed(2)}ºC`;
    } else if (unidad === 'C') {
      // Convertir de Celsius a Fahrenheit
      const fahrenheit = (temperatura * 9 / 5) + 32;
      document.getElementById('resultado').textContent = `${temperatura}ºC son ${fahrenheit.toFixed(2)}ºF`;
    }
  } else {
    // Si no coincide con el patrón, borrar el resultado
    document.getElementById('resultado').textContent = 'Introduce un valor válido (ej. 30C o 86F)';
  }
};
