const { capitalizeLastName } = require('../mayusculas');

describe('capitalizeLastName', () => {
	it('debería capitalizar correctamente el primer nombre y poner en mayúsculas el apellido', () => {
		const input = 'marisa tomei';
		const expectedOutput = 'Marisa TOMEI';
		expect(capitalizeLastName(input)).toBe(expectedOutput);
	});

	it('debería lanzar un error si el argumento no es un string', () => {
		const input = 12345;
		expect(() => capitalizeLastName(input)).toThrow(TypeError);
	});

	it('debería lanzar un error si el string no contiene exactamente dos palabras', () => {
		const input = 'marisa';
		expect(() => capitalizeLastName(input)).toThrow(Error);
	});

	it('debería lanzar un error si el string tiene más de dos palabras', () => {
		const input = 'marisa tomei extra';
		expect(() => capitalizeLastName(input)).toThrow(Error);
	});

	it('debería manejar nombres con diferentes capitalizaciones correctamente', () => {
		const input = 'mArIsa toMEi';
		const expectedOutput = 'Marisa TOMEI';
		expect(capitalizeLastName(input)).toBe(expectedOutput);
	});
});
