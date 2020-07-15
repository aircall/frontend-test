import React from 'react';
import { Link } from 'react-router-dom';

import { NavWrapper, NavIcon } from './styledComponents';
import phone from '../../asset/phone.svg';
import profile from '../../asset/profile.svg';
import setting from '../../asset/setting.svg';

const Nav = () => {
  return (
    <NavWrapper>
      <Link to="/">
        <NavIcon src={phone} alt="" active />
      </Link>
      <NavIcon src={profile} alt="" />
      <NavIcon src={setting} alt="" />
    </NavWrapper>
  );
};

export default Nav;
