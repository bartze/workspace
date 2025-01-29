import PropTypes from 'prop-types';
const LogoutButton = ({ onClick }) => {
    return <button onClick={onClick}>Logout</button>;
  };
  LogoutButton.propTypes = {
    onClick: PropTypes.func.isRequired
  };
  
  export default LogoutButton;

  
 
  
 
  