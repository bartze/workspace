// Para no tener confusiones por ambigüedades ni por interpretaciones, voy a hacer una matriz de decisiones:
// Tienda        Tipo Cliente    Estado Libro    Precio  Descuento
//---------------------------------------------------------------
// online        VIP             Nuevo           +50     10
// Físico/online Normal          Nuevo           +50     10
// Fisico        VIP             Nuevo           +50     15
// Fisico        Normal          Usado           +60     5
//                                          nuevo +30

function calcularPrecioLibros(tiendaOnline, VIP, precioLibroNuevo, precioLibroUsado) {
  let precioFinal = precioLibroNuevo + precioLibroUsado;
  if (precioLibroUsado > 30 && precioLibroNuevo > 60) {
    descuento = (precioLibroNuevo + precioLibroUsado) * 0.05;
    precioFinal -= descuento;
  } else if (tiendaOnline === true && VIP === true && precioLibroNuevo > 50) {
    descuento = precioLibroNuevo * 0.10;
    precioFinal -= descuento;
  } else if (VIP === false && precioLibroNuevo > 50) {
    descuento = precioLibroNuevo * 0.10;
    precioFinal -= descuento;
  } else if (VIP === true && precioLibroNuevo > 50) {
    descuento = precioLibroNuevo * 0.15;
    precioFinal -= descuento;
  }
  return precioFinal;
}

module.exports = { calcularPrecioLibros };
