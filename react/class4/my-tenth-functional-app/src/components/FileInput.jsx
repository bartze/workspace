import { useRef } from 'react';

function FileInput() {
	const fileInput = useRef(null);

	const handleSubmit = (event) => {
		event.preventDefault();
		alert(`Selected file - ${fileInput.current.files[0].name}`);
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Upload file:
				<input type="file" ref={fileInput} />
			</label>
			<br />
			<button type="submit">Submit</button>
		</form>
	);
}

export default FileInput;
