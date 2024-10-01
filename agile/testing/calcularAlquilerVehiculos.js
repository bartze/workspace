//Matriz de decisiones:
//Coche         Moto            Bici
//-----------------------------------
//
function calcularAlquilerVehiculos(numeroDeCoches, numeroDeMotos, numeroDeBicis) {
    let coche = 300;
    let moto =  150;
    let bici =  100;
    let precioTotal = (coche * numeroDeCoches) + (moto * numeroDeMotos) + (bici * numeroDeBicis)
    if (numeroDeCoches >= 2 || (numeroDeCoches === 1 && numeroDeMotos === 2)) {
        precioTotal -= 100;
    }
    
    return precioTotal;
  }
  
  module.exports = { calcularAlquilerVehiculos };