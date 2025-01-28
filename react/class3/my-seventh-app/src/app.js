import React, { Component } from 'react';
// import './app.css';
import Table from './Table';
import Form from './Form';

class App extends Component {
	state = {
		people: [],
	};
	removePeople = (index) => {
		const { people } = this.state;
		this.setState({
			people: people.filter((person, i) => {
				return i !== index;
			}),
		});
	};

	handleSubmit = (person) => {
		this.setState({ people: [...this.state.people, person] });
	};

	render() {
		const title = <h1>Gente Guay</h1>;

		return (
			<div className="container">
				<Table
					peopleData={this.state.people}
					removePeople={this.removePeople}
					title={title}
				/>
				<Form handleSubmit={this.handleSubmit} />
			</div>
		);
	}
}

export default App;
