import React from 'react';
import { Link } from 'react-router-dom';
import { MdLocalPhone, MdApps, MdAccountBox, MdSettings, MdFiberManualRecord } from 'react-icons/md';

const Menu = () => {
  return (
    <nav id="nav-menu">
      <ul className="nav-items flex horizontal ">
        <li className="nav-item">
          <a><MdLocalPhone size={28} /></a>
        </li>
        <li className="nav-item">
          <a><MdAccountBox size={28} /></a>
        </li>
        <li className="nav-item">
          <Link to="/activities"><MdApps size={48} /></Link>
        </li>
        <li className="nav-item">
          <a><MdSettings size={28} /></a>
        </li>
        <li className="nav-item">
          <a><MdFiberManualRecord size={28} /></a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
