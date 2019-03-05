import React from 'react';
import Activity from './Activity.jsx';


const ActivityList = ({ activeList, history }) => {
    const handleActivityClick = event => {
        const { id } = event.target;
        history.push(`/${id}`);
    }

    const activityList = activeList.length > 0 && activeList.map(activity => {
        const { id, created_at, direction, from, to, is_archived, call_type } = activity;

        return (
            <li key={id} id={`${id}`} >
                <Activity
                    onClick={handleActivityClick} 
                    created_at={created_at}
                    direction={direction}
                    from={from}
                    to={to}
                    is_archived={is_archived}
                    call_type={call_type}
                    id={id}
                />
            </li>)
        });


    return (
        <div className="activity-list">
            <ul onClick={handleActivityClick}>
                {activityList.length > 0 ? activityList : "You don't have activities."}
            </ul>
        </div>
    )
}


export default ActivityList;