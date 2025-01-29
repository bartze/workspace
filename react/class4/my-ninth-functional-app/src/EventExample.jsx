import { useState } from 'react';

const EventExample = () => {
	const [message, setMessage] = useState('');
	const [rows, setRows] = useState([1, 2, 3, 4, 5]);

	const handleClick = () => {
		setMessage('Button clicked!');
	};

	const handleChange = (e) => {
		setMessage(e.target.value);
	};

	const handleBlur = () => {
		setMessage('Input lost focus');
	};

	const handleKeyPress = (e) => {
		setMessage(`Key pressed: ${e.key}`);
	};

	const handleMouseOver = () => {
		setMessage('Mouse over!');
	};

	const deleteRow = (rowIndex) => {
		setRows(rows.filter((row, index) => index !== rowIndex));
	};

	return (
		<div>
			<h2>Event Example</h2>
			<button onClick={handleClick}>Click me</button>
			<input
				type="text"
				onChange={handleChange}
				onBlur={handleBlur}
				onKeyPress={handleKeyPress}
			/>
			<div onMouseOver={handleMouseOver}>Hover over me</div>
			<p>{message}</p>
			<ul>
				{rows.map((row, index) => (
					<li key={index}>
						Row {row} <button onClick={() => deleteRow(index)}>Delete</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default EventExample;
