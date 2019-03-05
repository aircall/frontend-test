import React from 'react';
import ActivityIcon from '../../../static/svg/phone-icon.svg';
import Badge from '../Badge.jsx';
import { getMissedCallCount } from '../../../helpers/activity';

const ActivityNavButton = ({ activeNav, activities }) => {
    const isActive = activeNav === 'activity-button';
    const buttonClassNames = `activity-button ${isActive && "active"}`;
    const totalMissedCalls = getMissedCallCount(activities);
    const displayBadge = totalMissedCalls > 0;
    
    return (
    <button id="activity-button" className={buttonClassNames}>
        {displayBadge && <Badge value={totalMissedCalls} />}
        <ActivityIcon className="activity-icon" width={20} />
    </button>
    );
}

export default ActivityNavButton;