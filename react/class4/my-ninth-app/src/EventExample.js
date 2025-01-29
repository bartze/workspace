import React, { Component } from 'react';
class EventExample extends Component {
	constructor(props) {
		super(props);
		// Este enlace es necesario para hacer que `this` funcione en el callback
		this.manejadorClick = this.manejadorClick.bind(this);
		this.deleteRow = this.deleteRow.bind(this);
	}
	manejadorClick() {
		// Manejadore de eventos ligado en el constructor
		console.log('this is:', this);
	}
	campoPublico = () => {
		// Campo público a usar como manejador de eventos
		console.log('this is:', this);
	};
	metodoClase() {
		// Método de clase
		console.log('this is:', this);
	}
	deleteRow = (id, e) => {
		console.log(e, id);
	};

	render() {
		const id = '10';
		return (
			<div>
				<button onClick={this.manejadorClick}>Manejador ligado con bind</button>
				<button onClick={this.campoPublico}>Manejador de campo público</button>
				<button onClick={this.metodoClase}>Manejador de método de clase</button>
				<button onClick={(e) => this.deleteRow(id, e)}>Eliminar con función flecha</button>
			</div>
		);
	}
}
export default EventExample;
