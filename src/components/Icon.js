import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import * as eva from 'eva-icons';

const colors = {
  green: '#00b388',
  gray: '#233142',
  black: '#000',
  white: '#fff',
  red: '#ff5c3a',
};

const Icon = ({ name, color, size }) => {
  useEffect(() => {
    eva.replace();
  }, []);

  return (
    <i
      className="icon"
      data-eva={name}
      data-eva-width={size}
      data-eva-height={size}
      data-eva-fill={colors[color]}
    ></i>
  );
};

Icon.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
};
Icon.defaultProps = {
  data: '',
  color: 'black',
  size: '16',
};

export default Icon;
