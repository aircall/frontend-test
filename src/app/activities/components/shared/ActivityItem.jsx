import React from 'react';
import PropTypes from 'prop-types';

import './ActivityItem.css';

export const ActivityItem = ({ activity, showTime }) => {
  const verb = {
    'voicemail': 'left a message',
    'answered': 'called',
    'missed': 'tried to call'
  }[activity.type];

  return (
    <div className="activity-item">
      <div className={`activity-item-type ${activity.type}`}></div>
      <div className="activity-item-details">
        <p>
          <strong>{activity.from}</strong>
          <span>&nbsp;{verb}&nbsp;</span>
          { (activity.type !== 'voicemail')
              ? <strong>{activity.to}</strong>
              : null
          }
        </p>
        <p>
          <small>via&nbsp;<strong>{activity.via}</strong></small>
        </p>
      </div>
      { showTime
          ? <div className="activity-item-time">{activity.time}</div>
          : null
      }
    </div>
  );
};

ActivityItem.propTypes = {
  activity: PropTypes.object.isRequired,
  showTime: PropTypes.bool
};
