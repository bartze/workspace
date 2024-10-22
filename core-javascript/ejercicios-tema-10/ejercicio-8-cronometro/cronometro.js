// 8. Crea un cronómetro en una página web (muy simple, sólo minutos y segundos)
let segundos = 0;
let minutos = 0;

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

setInterval(actualizarCronometro, 1000);

// 9. Sobre el ejercicio anterior, haz que con el click del ratón se pueda parar o continuar el tiempo.
// (No hace falta controlar el momento en el que se para el tiempo a la hora de volver a empezar)
