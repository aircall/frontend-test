import * as React from 'react';
import './ActivityList.css';
import ActivityItem from "./activity-item/ActivityItem";

const ActivityList = ({date, calls}) => {
    const callDetails = calls.map((call) => {
        return <ActivityItem call={call} key={call.id}/>
    });

    return (
        <div>
            <div className='activity-date'>{date}</div>
            <div>{callDetails}</div>
        </div>
    );
};

export default ActivityList;