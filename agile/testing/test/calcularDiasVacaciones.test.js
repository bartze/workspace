const { calcularDiasVacaciones } = require('../calcularDiasVacaciones');

describe('calcularDiasVacaciones', () => {
  it('debería sumar 5 dias de vacaciones si son menor de 18 o mayores o igual de 60 o llevan al menos 30 años', () => {
    const diasVacaciones = calcularDiasVacaciones(17, 0);
    expect(diasVacaciones).toBe(27);
  });
  it('debería sumar 3 dias extra de vacaciones si son mayores de 60 o llevan al menos 30 años', () => {
    const diasVacaciones = calcularDiasVacaciones(61, 30);
    expect(diasVacaciones).toBe(30);
  });
  it('debería sumar 2 dias de vacaciones si llevan al menos 15 años o mayores de 45(no se acumula)', () => {
    const diasVacaciones = calcularDiasVacaciones(20, 15);
    expect(diasVacaciones).toBe(24);
  });
});
