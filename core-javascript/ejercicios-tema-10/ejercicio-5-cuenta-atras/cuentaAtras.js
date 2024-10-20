// 5. Recibe un valor desde el usuario y haz una cuenta atrás y avisa cuando
// haya acabado.
function startCountdown(timeLeft, display) {
	if (isNaN(timeLeft) || timeLeft < 0) {
		display.textContent = 'Por favor, ingresa un número válido';
		return;
	}

	display.textContent = timeLeft.toString();

	const interval = setInterval(() => {
		timeLeft--;
		if (timeLeft <= 0) {
			clearInterval(interval);
			display.textContent = '¡Tiempo agotado!';
		} else {
			display.textContent = timeLeft.toString();
		}
	}, 1000);

	return interval;
}

module.exports = { startCountdown };
