// 4. Ejercicio
// Crea un script que pida al usuario el diámetro de una rueda y su grosor (en metros) y a través de condicionales if realice las siguientes operaciones:
// A) Si el diámetro es superior a 1.4 debe mostrarse el mensaje “La rueda es para un vehículo grande”.
// Si es menor o igual a 1.4 pero mayor que 0.8 debe mostrarse el mensaje “La rueda es para un vehículo mediano”.
// Si no se cumplen ninguna de las condiciones anteriores debe mostrarse por pantalla el mensaje “La rueda es para un vehículo pequeño”.
// B) Si el diámetro es superior a 1.4 con un grosor inferior a 0.4, ó si el diámetro es menor o igual a 1.4 pero mayor que 0.8, con un grosor inferior a 0.25,
// deberá mostrarse el mensaje “El grosor para esta rueda es inferior al recomendado”
// Ejecuta el código y comprueba sus resultados. Para comprobar si es correcta tu
// solución puedes consultar en los foros aprenderaprogramar.com.

window.onload = () => {
	let diametro = prompt('¿Qué diámetro tiene la rueda?');
	let grosor = prompt('¿Qué grosor tiene la rueda?');

	const calcularTipoVehiculo = () => {
		// Convertir a número
		diametro = parseFloat(diametro);
		grosor = parseFloat(grosor);

		// Validaciones
		if (isNaN(diametro) || isNaN(grosor)) {
			alert('Por favor, introduce solo números.');
			return;
		}
		if (diametro <= 0 || grosor <= 0) {
			alert('Por favor, introduce solo números positivos.');
			return;
		}

		if (
			(diametro > 1.4 && grosor < 0.4) ||
			(diametro <= 1.4 && diametro > 0.8 && grosor < 0.25)
		) {
			alert('El grosor para esta rueda es inferior al recomendado');
		} else if (diametro > 1.4) {
			alert('La rueda es para un vehículo grande');
		} else if (diametro < 1.4 && diametro > 0.8) {
			alert('La rueda es para un vehículo mediano');
		} else alert('La rueda es para un vehículo pequeño');
	};
	calcularTipoVehiculo();
};
