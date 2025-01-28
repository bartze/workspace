import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
	initialState = {
		name: '',
		job: '',
	};
	state = this.initialState;
	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name]: value,
		});
	};
	submitForm = () => {
		this.props.handleSubmit(this.state);
		this.setState(this.initialState);
	};
	render() {
		const { name, job } = this.state;
		return (
			<form className="form">
				<label htmlFor="name">Nombre</label>
				<input
					type="text"
					name="name"
					id="name"
					value={name}
					onChange={this.handleChange}
				/>
				<label htmlFor="job">Trabajo</label>
				<input type="text" name="job" id="job" value={job} onChange={this.handleChange} />
				<input type="button" value="Enviar" onClick={this.submitForm} />
			</form>
		);
	}
}

export default Form;
