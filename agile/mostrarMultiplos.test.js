/**
 * @jest-environment jsdom
 */

require('../core-javascript/ejercicios-tema-7/ejercicio-7-multiplos/multiplos'); // Importar la función obtenerMultiplos
require('../core-javascript/ejercicios-tema-7/ejercicio-7-multiplos/mostrarMultiplos'); // Asegúrate de importar mostrarMultiplos
const { fireEvent, getByLabelText, getByText } = require('@testing-library/dom');
require('@testing-library/jest-dom'); // Ajuste en la importación

document.body.innerHTML = `
  <label for="cantidad">Tamaño del array:</label>
  <input type="number" id="cantidad" name="cantidad" />
  <label for="numero">Número:</label>
  <input type="number" id="numero" name="numero" />
  <button onclick="mostrarMultiplos()">Mostrar Múltiplos</button>
  <label for="Resultado"></label>
`;

test('mostrarMultiplos debería actualizar el contenido del DOM con los múltiplos correctos', () => {
	// Establecer valores de entrada
	getByLabelText(document.body, 'Tamaño del array:').value = '3';
	getByLabelText(document.body, 'Número:').value = '2';

	// Simular clic en el botón
	fireEvent.click(getByText(document.body, 'Mostrar Múltiplos'));

	// Verificar si el resultado es correcto
	expect(document.getElementById('Resultado')).toHaveTextContent('[2,4,6]');
});
