const App = () => {
	const userName = 'Iñaki';

	return <WelcomePage title={<WelcomeMessage userName={userName} />} />;
};

const WelcomePage = ({ title }) => {
	return (
		<div>
			<h1>{title}</h1>
			<p>Here you can find all the information you need.</p>
		</div>
	);
};

const WelcomeMessage = ({ userName }) => {
	return <p>Welcome, {userName}!</p>;
};

export default App;
