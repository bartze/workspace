const { calcularAlquilerVehiculos } = require('../calcularAlquilerVehiculos');

describe('calcularAlquilerVehiculos', () => {
    it('debería devolver 600 si alquilamos 2 coches y una bici', () => {
        const precioTotal = calcularAlquilerVehiculos(2, 0, 1);
        expect(precioTotal).toBe(600);
    });
    it('debería devolver 250 si alquilamos una moto y una bici', () => {
        const precioTotal = calcularAlquilerVehiculos(0, 1, 1);
        expect(precioTotal).toBe(250);
    });
    it('debería devolver 250 si alquilamos tres coches y una bici', () => {
        const precioTotal = calcularAlquilerVehiculos(3, 0, 1);
        expect(precioTotal).toBe(900);
    });
    it('debería devolver 250 si alquilamos un coche una moto y una bici', () => {
        const precioTotal = calcularAlquilerVehiculos(1, 1, 1);
        expect(precioTotal).toBe(550);
    });
    it('debería borrar una bici despues de añadirla', () => {
        const precioTotal = calcularAlquilerVehiculos(2, 0, 1);
        expect(precioTotal).toBe(600);
    });
  });