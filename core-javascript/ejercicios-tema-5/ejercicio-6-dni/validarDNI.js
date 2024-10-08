// 6. Pedir que se introduzca un número de dni, después, calcular si el dni es
// verdadero o no en función de su formato y el número de dígitos.

const validarDNI = (dni) => {
	dni = document.getElementById('dni').value;

	// Convertir la letra a mayúsculas
	dni = dni.toUpperCase();

	const regexDNI = /^\d{8}[A-Z]$/;

	// Verificar el formato del DNI
	if (regexDNI.test(dni)) {
		document.getElementById('resultado').textContent = 'Formato válido';

		const numero = dni.slice(0, 8);
		const letraProporcionada = dni.charAt(8);

		// Calcular la letra correcta
		const indice = parseInt(numero, 10) % 23;
		const letras = 'TRWAGMYFPDXBNJZSQVHLCKET'; // Cadena de letras
		const letraCorrecta = letras.charAt(indice);

		// Comparar la letra proporcionada con la letra calculada
		if (letraProporcionada === letraCorrecta) {
			document.getElementById('resultado').textContent = 'DNI válido';
		} else {
			document.getElementById('resultado').textContent = 'DNI inválido: letra incorrecta';
		}
	} else {
		document.getElementById('resultado').textContent = 'Formato inválido';
	}
};
