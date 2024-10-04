// Matriz de decisiones:
// Coche         Moto            Bici
//-----------------------------------
//
function calcularAlquilerVehiculos(numeroDeCoches, numeroDeMotos, numeroDeBicis) {
  const coche = 300;
  const moto = 150;
  const bici = 100;
  let precioTotal = (coche * numeroDeCoches) + (moto * numeroDeMotos) + (bici * numeroDeBicis);
  if (numeroDeCoches >= 2 || (numeroDeCoches === 1 && numeroDeMotos === 2)) {
    precioTotal -= 100;
  }

  return precioTotal;
}

module.exports = { calcularAlquilerVehiculos };
