document.addEventListener('DOMContentLoaded', () => {
	// Solicitar la geolocalización del usuario
	navigator.geolocation.getCurrentPosition(success, error, {
		enableHighAccuracy: true,
		timeout: 5000,
		maximumAge: 0,
	});
});

function success(pos) {
	const crd = pos.coords;
	const ubicacion = `${crd.latitude},${crd.longitude}`;

	// Mostrar la ubicación en el documento HTML
	muestraUbicacion(ubicacion);

	// Hacer la llamada AJAX con la ubicación obtenida
	ajaxCheckWeather(crd.latitude, crd.longitude);
}

function error(err) {
	console.warn(`ERROR(${err.code}): ${err.message}`);
	alert('No se pudo obtener la geolocalización. Asegúrate de permitir el acceso a tu ubicación.');
}

function ajaxCheckWeather(latitude, longitude) {
	// Configurar llamada AJAX
	const requestOptions = {
		method: 'GET',
		redirect: 'follow',
	};
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&lang=es&appid=2123b15abf5dbccb4b78d19ccea8dd7d`;

	// Hacer llamada AJAX, gestionar respuesta con responseManager(resp)
	// Gestionar los errores con una alerta
	fetch(url, requestOptions)
		.then((response) => response.json())
		.then((result) => responseManager(result))
		.catch((error) => alert('Error:', error));
}

/* Función principal que gestiona la respuesta a la llamada AJAX */
function responseManager(resp) {
	console.log(resp);
	muestraDesc(resp.weather[0].description);
	muestraTemperatura(resp.main.temp);
	muestraHumedad(resp.main.humidity);
}

function muestraDesc(desc) {
	// Lleva un texto (que contiene la descripción de la previsión) a la página HTML
	let prev = document.getElementById('prevision');
	prev.innerHTML = desc;
}

function muestraUbicacion(ubicacion) {
	let elementoUbicacion = document.getElementById('latlong');
	elementoUbicacion.innerHTML = ubicacion;
}

function muestraTemperatura(temp) {
	// Convertir la temperatura de Kelvin a Celsius
	let tempCelsius = temp - 273.15;
	tempCelsius = tempCelsius.toFixed(1);
	let elementoTemperatura = document.getElementById('temp');
	elementoTemperatura.innerHTML = tempCelsius + ' °C';
}

function muestraHumedad(humedad) {
	let elementoHumedad = document.getElementById('humedad');
	elementoHumedad.innerHTML = humedad;
}
