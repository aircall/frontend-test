import React from 'react';
import ActivityDivider from './ActivityDivider.jsx';
import ActivityDetailButton from './ActivityDetailButton.jsx';

const Activity = props => {
    const { id, created_at, direction, from, to, is_archived, call_type } = props;

    return (
        <div className="activity">
            <ActivityDivider created_at={created_at} />
            <ActivityDetailButton
                created_at={created_at}
                direction={direction}
                from={from}
                to={to}
                is_archived={is_archived}
                call_type={call_type}
                id={id}
             />
        </div>
    )
};

export default Activity;