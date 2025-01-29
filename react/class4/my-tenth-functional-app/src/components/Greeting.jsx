import PropTypes from 'prop-types';

const UserGreeting = () => <h1>Welcome back!</h1>;
const GuestGreeting = () => <h1>Please sign up.</h1>;

const Greeting = ({ isLoggedIn }) => {
  return isLoggedIn ? <UserGreeting /> : <GuestGreeting />;
};

Greeting.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

export default Greeting;

