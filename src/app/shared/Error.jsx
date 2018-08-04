import React from 'react';
import PropTypes from 'prop-types';

export const Error = ({ message }) => {
  return (
    <div class="error">
      Whoops...
      <h3>{message}</h3>
    </div>
  );
};

Error.propTypes = {
  message: PropTypes.string.isRequired
};

export { Error };
