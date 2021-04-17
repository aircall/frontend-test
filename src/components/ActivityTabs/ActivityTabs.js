import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './ActivityTabs.css';

const ActivityTabs = () => {
  const { pathname } = useLocation();

  return (
    <nav className="tabs">
      <Link
        to="/"
        className={`tabs__link ${pathname === '/' && 'tabs__link-active'}`}
      >
        Activity Feed
      </Link>
      <Link
        to="/"
        className={`tabs__link ${
          pathname.includes('archives') && 'tabs__link-active'
        }`}
      >
        Activity Archives
      </Link>
    </nav>
  );
};

export default ActivityTabs;
