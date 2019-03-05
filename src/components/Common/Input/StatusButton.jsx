import React from 'react';

const StatusButton = ({ activeNav }) => {
    const isActive = activeNav === 'status-button';
    const buttonClassNames = `status-button ${isActive && "active"}`;

    return <button id="status-button" className={buttonClassNames}>
        <div className="status-type"></div>
    </button>;
}

export default StatusButton;

