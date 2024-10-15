const capitalizeLastName = require('../capitalizeLastName');

describe('capitalizeLastName', () => {
	it('debería capitalizar correctamente el primer nombre y poner en mayúsculas el apellido', () => {
		const input = 'marisa tomei';
		const expectedOutput = 'Marisa TOMEI';
		expect(capitalizeLastName(input)).toBe(expectedOutput);
	});

	it('debería lanzar un error si el argumento no es un string', () => {
		const input = 12345;
		const expectedOutput = 'El argumento debe ser un string.';
		expect(capitalizeLastName(input)).toBe(expectedOutput);
	});

	it('debería lanzar un error si el string no contiene exactamente dos palabras', () => {
		const input = 'marisa';
		const expectedOutput = 'El string debe consistir de exactamente dos palabras.';
		expect(capitalizeLastName(input)).toBe(expectedOutput);
	});

	it('debería lanzar un error si el string tiene más de dos palabras', () => {
		const input = 'marisa tomei extra';
		const expectedOutput = 'El string debe consistir de exactamente dos palabras.';
		expect(capitalizeLastName(input)).toBe(expectedOutput);
	});

	it('debería manejar nombres con diferentes capitalizaciones correctamente', () => {
		const input = 'mArIsa toMEi';
		const expectedOutput = 'Marisa TOMEI';
		expect(capitalizeLastName(input)).toBe(expectedOutput);
	});
});
