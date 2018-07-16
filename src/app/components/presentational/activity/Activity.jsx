import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';

import { parseActivityStatus } from 'utils/activityUtils';

import './activity.css';

const Activity = ({ activity }) => {
  return (
    <Link className={`activity activity--${activity.direction}`} to={`/activities/${activity.id}`}>
      {activity.from}
      <span className="activity__status">{parseActivityStatus(activity)}</span>
      <span className="activity__time">{moment(activity.created_at).format('HH:MM')}</span>
    </Link>
  );
};

Activity.propTypes = {
  activity: PropTypes.object.isRequired
};

export default Activity;
