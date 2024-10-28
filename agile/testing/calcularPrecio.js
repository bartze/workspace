function calcularPrecioFinal(precio, peso, tarjetaCredito) {
	let precioFinal = precio;
	let descuento = 0;
	if (precio > 200 && peso < 5 && tarjetaCredito === true) {
		descuento = precioFinal * 0.15;
		precioFinal -= descuento;
	} else if (precio > 200) {
		descuento = precioFinal * 0.1;
		precioFinal -= descuento;
	} else if (peso > 5 && precioFinal < 100) {
		precioFinal += peso;
	} else if (tarjetaCredito === true) {
		descuento = precioFinal * 0.03;
		precioFinal -= descuento;
	}
	return precioFinal;
}

module.exports = { calcularPrecioFinal };
