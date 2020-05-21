import React from 'react';
import Logo from './Logo';
import HeaderNav from './HeaderNav';

import '../../css/header.css';

function Header() {
    return (
        <header>
            <Logo />
            <HeaderNav />
        </header>
    );
}

export default Header;
