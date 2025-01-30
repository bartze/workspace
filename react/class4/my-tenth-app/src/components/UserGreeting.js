const UserGreeting = () => {
	return <h1>Welcome back!</h1>;
};

const SignUP = () => {
	return <h1>Please sign up.</h1>;
};

const Greeting = ({ isLoggedIn }) => {
	if (isLoggedIn) {
		return <UserGreeting />;
	} else {
		return <SignUP />;
	}
};

export default Greeting;
