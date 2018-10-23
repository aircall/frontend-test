import React from 'react';

/* Activity data:
  {
    call_type: "missed"
    created_at: "2018-04-19T09:38:41.000Z"
    direction: "outbound"
    duration: "120"
    from: "Pierre-Baptiste Béchu"
    id: 7834
    is_archived: false
    to: "06 46 62 12 33"
    via: "NYC Office"
  } */

const ActivityDetail = (props) => {
  const activity = props.activity;
  return (
    <div id="activity-detail" className="flex vertical">
      <h1 className="flex vertical">
        <span className="flex horizontal center">{props.time()[0]}</span>
        <div className="flex horizontal space-around">
          <span>{props.time()[1]}</span>
          <span>{props.message()}</span>
        </div>
      </h1>
      <div className="flex horizontal center">
        <div className="flex vertical">
          <span>To <strong>{activity.to}</strong></span>
          <span>From <strong>{activity.from}</strong></span>
          <span>via <strong>{activity.via}</strong></span>
          <span>{activity.direction} for {props.duration()}</span>
        </div>
      </div>


    </div>
  )
}

export default ActivityDetail;
