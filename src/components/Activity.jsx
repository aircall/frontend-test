import React from 'react';
import { Link } from 'react-router-dom';
import { MdArchive } from 'react-icons/md';

const Activity = (props) => {
  const activity = props.value;
  return (
    <li id="activity" className="flex horizontal">
      <Link to={`/activities/${activity.id}`} className="flex horizontal">

        {/* Icons are being set from container */}
        { props.setIcon(activity.call_type) }

        <div className="flex vertical">
          <span>{activity.from}</span>
          <span>via: {activity.via}</span>
        </div>

        <div className="flex horizontal">
          <span>{props.time}</span>
        </div>
      </Link>
      {props.archiveIcon}
    </li>
  )
}

export default Activity;
