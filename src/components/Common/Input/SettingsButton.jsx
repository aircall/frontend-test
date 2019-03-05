import React from 'react';
import SettingsIcon from '../../../static/svg/settings-icon.svg';

const SettingsButton = ({ activeNav, handleSVGClick }) => {
    const isActive = activeNav === 'settings-button';
    const buttonClassNames = `settings-button ${isActive && "active"}`;

    return (<button id="settings-button" className={buttonClassNames}>
        <SettingsIcon className={"settings-icon"} width={20} />
    </button>);
}

export default SettingsButton;