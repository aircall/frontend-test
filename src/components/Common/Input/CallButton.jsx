import React from 'react';
import KeyboardIcon from '../Icons/KeyboardIcon.jsx';

const CallButton = ({ activeNav }) => {
    const isActive = activeNav === 'call-button';
    const buttonClassNames = `call-button ${isActive && "active"}`;

    return (
    <button id="call-button" className={buttonClassNames}>
        <div className="call-button__inner">
            <KeyboardIcon />
        </div>
    </button>);
}

export default CallButton;