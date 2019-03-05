import React from 'react';
import UserIcon from '../../../static/svg/user-icon.svg';

const UserButton = ({ activeNav })=> {
    const isActive = activeNav === 'user-button';
    const buttonClassNames = `user-button ${isActive && "active"}`;

    return (<button id="user-button" className={buttonClassNames}>
        <UserIcon className="user-icon" width={20} />
    </button>);
}

export default UserButton;