import PropTypes from 'prop-types';

const LoginButton = ({ onClick }) => {
  return <button onClick={onClick}>Login</button>;
};

LoginButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default LoginButton;

  