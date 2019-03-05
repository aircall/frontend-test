import React from 'react';
import CallTypeIcon from '../Common/Icons/CallTypeIcon.jsx';
import VerticalDivider from '../Common/VerticalDivider.jsx';
import { parseUTCDate, getMeridiem } from '../../helpers/date';
import { isMissedCall } from '../../helpers/activity.js';

const ActivityDetailButton = props => {
    const { created_at, from, to, call_type} = props;
    const { hour, minutes } = parseUTCDate(created_at);
    const meridiem = getMeridiem(hour);
    const toMessage = isMissedCall(call_type) ? "tried to call on" : "called on";

    return (
        <button className="activity-detail-button">
            <CallTypeIcon call_type={call_type} />
            <div className="activity-from-to">
                <div className="activity-from">{from}</div>
                {to && <div className="activity-to">
                    {toMessage}
                    <span className="activity-to-name">{to}</span>
                </div>}
            </div>
            <VerticalDivider />
            <div className="activity-time-section">
                <span className="activity-time">{`${hour}:${minutes}`}</span>
                <span className="activity-meridian">{meridiem}</span>
            </div>
        </button>
    )
};

export default ActivityDetailButton;
