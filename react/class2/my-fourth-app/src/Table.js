import React from 'react';
import './Table.css';

const TableHeader = () => {
	return (
		<thead>
			<tr>
				<th>Nombre</th>
				<th>Profesión</th>
				<th>Edad</th>
			</tr>
		</thead>
	);
};

// Componente funcional para el cuerpo de la tabla
const TableBody = () => {
	return (
		<tbody>
			<tr>
				<td>María González</td>
				<td>Ingeniera</td>
				<td>29</td>
			</tr>
			<tr>
				<td>Carlos López</td>
				<td>Médico</td>
				<td>35</td>
			</tr>
			<tr>
				<td>Laura Martínez</td>
				<td>Diseñadora</td>
				<td>24</td>
			</tr>
		</tbody>
	);
};

// Componente de clase que incorpora componentes funcionales
class Table extends React.Component {
	render() {
		return (
			<table>
				<TableHeader />
				<TableBody />
			</table>
		);
	}
}

export default Table;
