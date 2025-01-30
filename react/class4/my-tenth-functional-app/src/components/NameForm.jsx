import { useRef } from 'react';

function NameForm() {
	const inputRef = useRef(null);

	const handleSubmit = (event) => {
		event.preventDefault();
		alert('A name was submitted: ' + inputRef.current.value);
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Name:
				<input type="text" ref={inputRef} defaultValue="Bob" />
			</label>
			<input type="submit" value="Submit" />
		</form>
	);
}

export default NameForm;
