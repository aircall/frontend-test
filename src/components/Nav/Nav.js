import React, { useState } from 'react';
import './Nav.css';

import Icon from '../Icon';

const Nav = () => (
  <nav className="nav">
    <button className="nav__button">
      <Icon name="phone-outline" color="gray" size="20" />
    </button>
    <button className="nav__button">
      <Icon name="people-outline" color="gray" size="20" />
    </button>
    <button className="nav__button nav__button-primary">
      <Icon name="keypad" color="white" size="30" />
    </button>
    <button className="nav__button">
      <Icon name="settings-outline" color="gray" size="20" />
    </button>
    <button className="nav__button">
      <Icon name="archive-outline" color="gray" size="20" />
    </button>
  </nav>
);

Nav.propTypes = {};
Nav.defaultProps = {};

export default Nav;
