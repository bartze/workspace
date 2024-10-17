jest.useFakeTimers();

describe('Intervalo de impresión', () => {
	test('debería imprimir 1 cada segundo', () => {
		console.log = jest.fn(); // Mofa la función console.log

		const intervalo = setInterval(() => {
			console.log(1);
		}, 1000);

		jest.advanceTimersByTime(3000); // Avanza los temporizadores por 3 segundos

		expect(console.log).toHaveBeenCalledTimes(3); // Comprueba que se haya llamado 3 veces
		expect(console.log).toHaveBeenCalledWith(1); // Comprueba que se haya llamado con 1

		clearInterval(intervalo); // Detener el intervalo
	});

	test('debería detener el intervalo después de 10 segundos', () => {
		console.log = jest.fn(); // Mofa la función console.log

		const intervalo = setInterval(() => {
			console.log(1);
		}, 1000);

		setTimeout(() => {
			clearInterval(intervalo);
			console.log('Intervalo detenido');
		}, 10000);

		jest.advanceTimersByTime(10000); // Avanza los temporizadores por 10 segundos

		expect(console.log).toHaveBeenCalledTimes(11); // 10 veces para 1 + 1 vez para 'Intervalo detenido'
		expect(console.log).toHaveBeenCalledWith('Intervalo detenido'); // Comprueba que 'Intervalo detenido' fue impreso

		clearInterval(intervalo); // Asegura que el intervalo esté detenido
	});
});
