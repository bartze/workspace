import React, { useState } from 'react';
import Table from './Table';
import Form from './Form';

const App = () => {
	const [people, setPeople] = useState([]);
	const removePeople = (index) => {
		setPeople(people.filter((person, i) => i !== index));
	};

	const handleSubmit = (person) => {
		setPeople([...people, person]);
	};

	const title = 'My Seventh Functional App';
	return (
		<div className="container">
			<Table peopleData={people} removePeople={removePeople} title={title} />
			<Form handleSubmit={handleSubmit} />
		</div>
	);
};

export default App;
