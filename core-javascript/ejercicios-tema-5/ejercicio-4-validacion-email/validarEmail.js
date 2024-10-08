// 4. Una función que pida una dirección de email y valide si la dirección es
// correcta o no.
const validarEmail = (correo) => {
	const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return regex.test(correo);
};
const comprobarEmail = (email) => {
	email = document.getElementById('yourEmail').value;
	if (validarEmail(email)) {
		document.getElementById('resultado').textContent = 'La dirección de correo es válida.';
	} else {
		document.getElementById('resultado').textContent = 'La dirección de correo no es válida.';
	}
};
