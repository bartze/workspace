import './app.css';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1 style={{ color: 'blue' }}>Hello, world!</h1>
				<p>Bienvenido a React</p>
				<button onClick={() => alert('¡Hola!')}>Haz clic aquí</button>
			</header>
		</div>
	);
}

export default App;
