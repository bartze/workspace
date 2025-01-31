import { Component } from 'react';
import PropTypes from 'prop-types';

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
				<h1 className="table-title">{title}</h1>
				<table>
					<TableHeader />
					<TableBody peopleData={peopleData} removePeople={removePeople} />
				</table>
			</>
		);
	}
}

TableBody.propTypes = {
	peopleData: PropTypes.array.isRequired,
	removePeople: PropTypes.func.isRequired,
  };
  
  Table.propTypes = {
	title: PropTypes.string.isRequired,
	removePeople: PropTypes.func.isRequired,
	peopleData: PropTypes.array.isRequired,
  };

export default Table;
