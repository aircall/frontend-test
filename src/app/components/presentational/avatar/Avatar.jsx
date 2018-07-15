import React from 'react';
import PropTypes from 'prop-types';

import './avatar.css';

const Avatar = ({ src, alt }) => {
  return (
    <div className="avatar">
      <img src={src} alt={alt} />
    </div>
  );
};

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string
};

Avatar.defaultProps = {
  alt: ''
};

export default Avatar;
