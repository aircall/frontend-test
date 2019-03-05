import React from 'react';
import ResetButton from '../../static/svg/reset-icon.svg';

const ActivityResetButton = ({ resetActivities, getActivities }) => {
    const handleButtonClick = event => {
        event.stopPropagation();

        resetActivities().then(getActivities);
    };

    return (
        <button onClick={handleButtonClick} className="activity-archive-button">
            <ResetButton width={20} /> 
            <span className="activity-archive-text">
                Reset all calls
            </span>
        </button>
    )
};

export default ActivityResetButton;