import React from 'react';
import './Table.css';

// Componente funcional para el encabezado de la tabla
const TableHeader = () => {
	return (
		<thead>
			<tr>
				<th>Nombre</th>
				<th>Profesión</th>
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
			</tr>
		);
	});

	return <tbody>{rows}</tbody>;
};

// Componente de clase que incorpora componentes funcionales
class Table extends React.Component {
	render() {
		return (
			<table>
				<TableHeader />
				<TableBody peopleData={this.props.peopleData} />
			</table>
		);
	}
}

export default Table;
