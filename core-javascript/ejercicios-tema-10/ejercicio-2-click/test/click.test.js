const { esClickado } = require('../click');

// Simular el DOM para los tests
document.body.innerHTML = `
  <h1>Click</h1>
  <button onclick="esClickado()">Eres el Nº</button>
  <p id="resultado"></p>
`;

describe('esClickado', () => {
	beforeEach(() => {
		// Reiniciar el contenido antes de cada test
		document.getElementById('resultado').textContent = '';
		jest.useFakeTimers(); // Usar temporizadores simulados
	});

	afterEach(() => {
		jest.useRealTimers(); // Restaurar temporizadores reales después de cada test
	});

	it('debería mostrar "1" inmediatamente después del click', async () => {
		esClickado();
		expect(document.getElementById('resultado').textContent).toBe('1');
	});

	it('debería mostrar "Operación Completada" después de 2 segundos', async () => {
		const promise = esClickado();

		// Adelantar el tiempo en 2 segundos
		jest.advanceTimersByTime(2000);

		// Esperar a que la operación asíncrona se complete
		await promise;

		expect(document.getElementById('resultado').textContent).toBe('Operación Completada');
	});
});
