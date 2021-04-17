import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

import Icon from '../Icon';

const NotFound = () => (
  <div className="not-found">
    <Icon name="alert-triangle-outline" size="28" />
    <h1>Oups, nothing here...</h1>
    <Link to="/">
      <span>Go back to activity feed</span>{' '}
      <Icon name="arrow-ios-forward-outline" color="green" />
    </Link>
  </div>
);

export default NotFound;
