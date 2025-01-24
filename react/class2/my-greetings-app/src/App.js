import React from 'react';
import './App.css';
import Welcome from './Welcome';

function App() {
	return (
		<div className="App">
			<Welcome name="María" />
			<Welcome name="Carlos" />
			<Welcome name="Laura" />
		</div>
	);
}

export default App;
