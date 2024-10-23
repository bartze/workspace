// 8. Crea un cronómetro en una página web (muy simple, sólo minutos y segundos)
// 9. Sobre el ejercicio anterior, haz que con el click del ratón se pueda parar o continuar el tiempo.
// (No hace falta controlar el momento en el que se para el tiempo a la hora de volver a empezar)

let segundos = 0;
let minutos = 0;
let intervalId = null;

const actualizarCronometro = () => {
	segundos++;
	if (segundos === 60) {
		segundos = 0;
		minutos++;
	}
	const minutosTexto = minutos < 10 ? '0' + minutos : minutos;
	const segundosTexto = segundos < 10 ? '0' + segundos : segundos;
	document.getElementById('cronometro').textContent = `${minutosTexto}:${segundosTexto}`;
};

const toggleCronometro = () => {
	if (intervalId) {
		clearInterval(intervalId);
		intervalId = null;
	} else {
		intervalId = setInterval(actualizarCronometro, 1000);
	}
};

const init = () => {
	const button = document.getElementById('toggle-button');
	if (button) {
		button.addEventListener('click', toggleCronometro);
	}
};

// Llamar a init solo si estamos en un navegador
if (typeof window !== 'undefined') {
	window.onload = init;
}

// Funciones para acceder y resetear estados internos durante las pruebas
const obtenerTiempo = () => ({ segundos, minutos });
const reiniciarCronometro = () => {
	segundos = 0;
	minutos = 0;
	document.getElementById('cronometro').textContent = '00:00';
	if (intervalId) {
		clearInterval(intervalId);
		intervalId = null;
	}
};

module.exports = { actualizarCronometro, obtenerTiempo, reiniciarCronometro, toggleCronometro };
