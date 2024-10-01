const { calcularPrecioFinal } = require('../calcularPrecio');

describe('calcularPrecioFinal', () => {
    it('debería aplicar un descuento del 10% si el precio es mayor a 200', () => {
      const precioFinal = calcularPrecioFinal(250, 3, false);
      expect(precioFinal).toBe(225);
    });
    it('debería cobrar portes si el peso es mayor de 5 y precio menor de 100', () => {
        const precioFinal = calcularPrecioFinal(90, 6, false);
        expect(precioFinal).toBe(96);
    });
    it('debería aplicar envío gratuito si el precio es mayor a 100€ y el peso es mayor a 5kg', () => {
        const precioFinal = calcularPrecioFinal(110, 6, false);
        expect(precioFinal).toBe(110);
    });
    it('debería aplicar 3% descuento extra si paga con tarjeta', () => {
        const precioFinal = calcularPrecioFinal(100, 3, true);
        expect(precioFinal).toBe(97);
    });
    it('debería aplicar 15% descuento si precio mayor 200, pago con tarjeta y peso menor 5', () => {
        const precioFinal = calcularPrecioFinal(1000, 3, true);
        expect(precioFinal).toBe(850);
    });
  });