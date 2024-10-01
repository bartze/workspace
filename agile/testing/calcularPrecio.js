function calcularPrecioFinal(precio, peso, tarjetaCredito) {
    let precioFinal = precio;
    if (precio > 200) {
        descuento = precioFinal * 0.10;
        precioFinal -= descuento;
    }
    if (peso > 5 && precioFinal < 100) {
        precioFinal += peso;
    }
    return precioFinal;
  }
  
  module.exports = { calcularPrecioFinal };