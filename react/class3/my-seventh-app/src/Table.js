import React, { Component } from 'react';
import './Table.css';

// Componente funcional para el encabezado de la tabla
const TableHeader = () => {
	return (
		<thead>
			<tr>
				<th>Nombre</th>
				<th>Profesión</th>
				<th>Eliminar</th>
			</tr>
		</thead>
	);
};

// Componente funcional para el cuerpo de la tabla
const TableBody = (props) => {
	const rows = props.peopleData.map((row, index) => {
		return (
			<tr key={index}>
				<td>{row.name}</td>
				<td>{row.job}</td>
				<button onClick={() => props.removePeople(index)}>Eliminar</button>
			</tr>
		);
	});

	return <tbody>{rows}</tbody>;
};

// Componente de clase que incorpora componentes funcionales
class Table extends Component {
	render() {
		const { title, removePeople, peopleData } = this.props;
		return (
			<>
				{title}
				<table>
					<TableHeader />
					<TableBody peopleData={peopleData} removePeople={removePeople} />
				</table>
			</>
		);
	}
}

export default Table;
