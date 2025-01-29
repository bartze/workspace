import PropTypes from 'prop-types';

const Warning = ({ warn }) => {
  if (!warn) {
    return null;
  }
  return <div className="warning">Warning!!</div>;
};

Warning.propTypes = {
  warn: PropTypes.bool.isRequired
};

export default Warning;

  