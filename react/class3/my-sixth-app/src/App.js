import './App.css';

const FancyBorder = (props) => {
	return <div className={'FancyBorder FancyBorder-' + props.color}>{props.children}</div>;
};

const WelcomeDialog = () => {
	return (
		<FancyBorder color="blue">
			<h1 className="Dialog-title">Welcome</h1>
			<p className="Dialog-message">Thank you for visiting our spacecraft!</p>
		</FancyBorder>
	);
};

const GoodByeDialog = () => {
	return (
		<FancyBorder color="red">
			<h1 className="Dialog-title">Good Bye</h1>
			<p className="Dialog-message">Thank you for visiting our spacecraft!</p>
		</FancyBorder>
	);
};

const App = () => {
	return (
		<div>
			<WelcomeDialog />
			<GoodByeDialog />
		</div>
	);
};

export default App;
