import React from 'react';
import { parseUTCDate, formatDate } from '../../helpers/date';

const ActivityDivider = ({ created_at }) => {
    const { month, day, year } = parseUTCDate(created_at);

    return <div className="activity-divider">
        <span>{formatDate(month, day, year).toUpperCase()}</span>
    </div>
}

export default ActivityDivider;