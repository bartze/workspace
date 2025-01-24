import React from 'react';
import Table from './Table';
import './app.css';

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<h1>Listado de Personas</h1>
				<Table />
			</div>
		);
	}
}

export default App;
