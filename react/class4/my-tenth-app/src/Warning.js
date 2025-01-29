function Warning({ isLoggedIn }) {
	return (
		<div>
			The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
		</div>
	);
}

export default Warning;
