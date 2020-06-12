import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './ActivityItem.css';

import Icon from '../Icon';

const ActivityItem = ({ data }) => {
  const {
    call_type,
    created_at,
    direction,
    duration,
    from,
    id,
    is_archived,
    to,
    via,
  } = data;

  const time = new Date(created_at);
  const number = direction === 'outbound' ? to : from;
  const recipient = direction === 'outbound' ? from : to;
  const icon = call_type === 'missed' ? 'missed' : 'call';

  return (
    <li className="activity-item">
      <div className="activity-item__info">
        <Icon name={`phone-${icon}-outline`} color="gray" />
        <div className="activity-item__details">
          <p className="activity-item__number">{number}</p>
          <p className="activity-item__type">
            <span>{direction}</span>
            {` call ${call_type} from ${recipient}`}
          </p>
        </div>
      </div>
      <div className="activity-item__info">
        <div className="activity-item__time">{`${time.getHours()}:${time.getMinutes()}`}</div>
        <Icon name="arrow-ios-forward-outline" color="gray" />
      </div>
    </li>
  );
};

ActivityItem.propTypes = {
  data: PropTypes.object,
};
ActivityItem.defaultProps = {
  data: {},
};

export default ActivityItem;
