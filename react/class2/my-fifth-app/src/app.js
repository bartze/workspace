import React from 'react';
import './app.css';
import Table from './Table';

class App extends React.Component {
	render() {
		const people = [
			{
				name: 'María González',
				job: 'Ingeniera',
			},
			{
				name: 'Carlos López',
				job: 'Médico',
			},
			{
				name: 'Laura Martínez',
				job: 'Diseñadora',
			},
		];

		return (
			<div className="App">
				<div className="App-header">
					<h1>Listado de Personas</h1>
				</div>
				<Table peopleData={people} />
			</div>
		);
	}
}

export default App;
