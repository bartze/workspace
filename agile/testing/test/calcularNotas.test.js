const { calcularNotas } = require('../calcularNotas');

describe('calcularNotas', () => {
  it('debería suspender si cualquiera de las tres categorías es menor de 25', () => {
    const notaFinal = calcularNotas(24, 24, 24, 73);
    expect(notaFinal).toBe('Suspendido');
  });
  it('debería suspender si la suma de las tres categorías es menor de 76', () => {
    const notaFinal = calcularNotas(25, 25, 25, 75);
    expect(notaFinal).toBe('Suspendido');
  });
  it('debería aprobar si la suma de las tres categorías es entre 76 y 100', () => {
    const notaFinal = calcularNotas(33, 33, 33, 100);
    expect(notaFinal).toBe('Aprobado');
  });
  it('debería sacar bien si la suma de las tres categorías es entre 101 y 125', () => {
    const notaFinal = calcularNotas(40, 40, 40, 125);
    expect(notaFinal).toBe('Bien');
  });
  it('debería sacar muy bien si la suma de las tres categorías es superior a 125', () => {
    const notaFinal = calcularNotas(50, 50, 50, 155);
    expect(notaFinal).toBe('Muy Bien');
  });
});
