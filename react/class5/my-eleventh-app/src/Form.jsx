import { Component } from 'react';
class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			input:"",
			textArea: "Hola Mando, aqui hay algo de texto en la caja de texto",
			select: "coconut",
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(event) {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	}	
	handleSubmit(event) {
		alert(`Input: ${this.state.input}\nTextArea: ${this.state.textArea}\nSelect: ${this.state.select}`);
		event.preventDefault();
	}
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					No editable:
					<input type="text" value="hola" readOnly />
				</label>
				<hr/>
				<label>
					Editable:
					<input 
						type="text" 
						name="input"
						value={this.state.input} 
						onChange={this.handleChange} 
					/>
				</label>
				<hr/>
				<label>
					Text area:
					<textarea 
						value={this.state.textArea}
						name="textArea"
						onChange={this.handleChange}
					/>
				</label>
				<hr/>
				<label>
					Select:
					<select 
						value={this.state.select}
						name="select"
						onChange={this.handleChange}
					>
						<option value="grapefruit">Grapefruit</option>
						<option value="lime">Lime</option>
						<option value="coconut">Coconut</option>
						<option value="mango">Mango</option>
					</select>
				</label>
				<input type="submit" value="Enviar" />
			</form>
		);
	}	
}

export default Form;
