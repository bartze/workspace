import React from 'react';
import ReactDOM from 'react-dom/client';

function tick() {
	const element = (
		<div>
			<h1>Hola, Mando!</h1>
			<h2>Son las {new Date().toLocaleTimeString()}.</h2>
		</div>
	);

	const root = ReactDOM.createRoot(document.getElementById('root'));
	root.render(element);
}

setInterval(tick, 1000);
