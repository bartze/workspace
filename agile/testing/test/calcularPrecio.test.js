const { calcularPrecioFinal } = require('../calcularPrecio');

describe('calcularPrecioFinal', () => {
    it('debería aplicar un descuento del 10% si el precio es mayor a 200', () => {
      const precioFinal = calcularPrecioFinal(250, 3, false);
      expect(precioFinal).toBe(225);
    });
    it('debería aplicar envio gratuito si el peso es inferior a 5Kg, si no el envío es el peso en euros', () => {
        let precioFinal = calcularPrecioFinal(100, 3, false);
        expect(precioFinal).toBe(100);

        precioFinal = calcularPrecioFinal(100, 6, false);
        expect(precioFinal).toBe(106);
      });
    it('debería aplicar envío gratuito si el precio es mayor de 100€', () => {
        const precioFinal = calcularPrecioFinal(110, 6, false);
        expect(precioFinal).toBe(110);
      });
  });