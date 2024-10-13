// 1.6 Crea una clase para transformar números naturales a números romanos y
// viceversa (máximo que admite 1000, si no, da un error)
class Transformador {
	constructor() {}

	transformarARomano(natural) {
		if (natural > 1000) {
			throw new Error('Número demasiado grande. El máximo es 1000.');
		}

		const valores = [
			{ numero: 1000, romano: 'M' },
			{ numero: 900, romano: 'CM' },
			{ numero: 500, romano: 'D' },
			{ numero: 400, romano: 'CD' },
			{ numero: 100, romano: 'C' },
			{ numero: 90, romano: 'XC' },
			{ numero: 50, romano: 'L' },
			{ numero: 40, romano: 'XL' },
			{ numero: 10, romano: 'X' },
			{ numero: 9, romano: 'IX' },
			{ numero: 5, romano: 'V' },
			{ numero: 4, romano: 'IV' },
			{ numero: 1, romano: 'I' },
		];

		let resultado = '';
		for (const { numero, romano } of valores) {
			while (natural >= numero) {
				resultado += romano;
				natural -= numero;
			}
		}
		return resultado;
	}

	transformarANatural(romano) {
		const valores = {
			M: 1000,
			CM: 900,
			D: 500,
			CD: 400,
			C: 100,
			XC: 90,
			L: 50,
			XL: 40,
			X: 10,
			IX: 9,
			V: 5,
			IV: 4,
			I: 1,
		};

		let resultado = 0;
		for (let i = 0; i < romano.length; i++) {
			const actual = valores[romano[i]];
			const siguiente = valores[romano[i + 1]];

			if (siguiente && actual < siguiente) {
				resultado -= actual;
			} else {
				resultado += actual;
			}
		}
		if (resultado > 1000) {
			throw new Error('Número demasiado grande. El máximo es 1000.');
		}
		return resultado;
	}
}

const nuevaTransformacion = new Transformador();
console.log(nuevaTransformacion.transformarARomano(5)); // Output: V
console.log(nuevaTransformacion.transformarANatural('V')); // Output: 5

module.exports = { Transformador };
