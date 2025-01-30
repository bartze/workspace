import React from 'react';
import Greeting from './UserGreeting';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Warning from './Warning';

class LoginControl extends React.Component {
	constructor(props) {
		super(props);
		this.state = { isLoggedIn: false };
	}

	handleLoginClick = () => {
		this.setState({ isLoggedIn: true });
	};

	handleLogoutClick = () => {
		this.setState({ isLoggedIn: false });
	};

	render() {
		const { isLoggedIn } = this.state;

		return (
			<div>
				<Warning isLoggedIn={isLoggedIn} />
				<Greeting isLoggedIn={isLoggedIn} />
				{isLoggedIn ? (
					<LogoutButton onClick={this.handleLogoutClick} />
				) : (
					<LoginButton onClick={this.handleLoginClick} />
				)}
			</div>
		);
	}
}

export default LoginControl;
