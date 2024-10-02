// 3. Crea una función que convierta de Farenheit a Celsius, y si quieres que
// convierta de Celsius a Farenheit, y otra tercera que haga las dos cosas
// dependiendo el input. 
const convertirFarenheitACelsius = (temperaturaFarenheit) => {
    temperaturaFarenheit = parseFloat(document.getElementById('temp1').value);
    temperaturaCelsius = (temperaturaFarenheit-32) * 5/9;
    document.getElementById('resultado1').textContent = `${temperaturaFarenheit}ºF son ${temperaturaCelsius}ºC`;
};
const convertirCelsiusAFarenheit = (temperaturaCelsius) => {
    temperaturaCelsius = parseFloat(document.getElementById('temp2').value);
    temperaturaFarenheit = (temperaturaCelsius * 9/5) + 32;
    document.getElementById('resultado2').textContent = `${temperaturaCelsius}ºC son ${temperaturaFarenheit}ºF`;
};
