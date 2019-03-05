import React from 'react';
import ArchiveIcon from '../../static/svg/archive-icon.svg';
import { getActivityIds } from '../../helpers/activity';

const ActivityArchiveButton = props => {
    const { archiveAll = false, updateActivity, updateActivities, 
        activities, getActivities, activityId, handleArchive } = props;

    const handleButtonClick = event => {
        event.stopPropagation();
        const activityIds = getActivityIds(activities);

        // NTS: Fix hack.
        if (archiveAll) {
            updateActivities(activityIds).then(getActivities).then(getActivities);
        } else {
            updateActivity(activityId).then(getActivities);
        }
    };

    return (
        <button onClick={handleButtonClick} className="activity-archive-button">
            <ArchiveIcon width={20} /> 
            <span className="activity-archive-text">
                {archiveAll ? "Archive all calls" : "Archive Call"}
            </span>
        </button>
    )
};

export default ActivityArchiveButton;