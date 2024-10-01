const { calcularPrecioLibros } = require('../calcularPrecioLibros');

describe('calcularPrecioLibros', () => {
    it('debería aplicar un descuento del 10% si es online, VIP, nuevo y mayor que 50', () => {
        const precioFinal = calcularPrecioLibros(true, true, 100, 0);
        expect(precioFinal).toBe(90);
    });
    it('debería aplicar un descuento del 10% si es libro nuevo y mayor de 50', () => {
        const precioFinal = calcularPrecioLibros(false, false, 100, 0);
        expect(precioFinal).toBe(90);
    });
    it('debería aplicar un descuento del 15% si es VIP, libro nuevo y mayor de 50', () => {
        const precioFinal = calcularPrecioLibros(false, true, 100, 0);
        expect(precioFinal).toBe(85);
    });
    it('debería aplicar un descuento del 5% si compra libro usado y mayor de 60 y además compra libro nuevo mayor de 30', () => {
        const precioFinal = calcularPrecioLibros(false, false, 65, 35);
        expect(precioFinal).toBe(95);
    });
  });