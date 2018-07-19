import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MdInfo } from 'react-icons/lib/md';
import moment from 'moment';
import 'moment-duration-format';

import ActivityDirection from '../../shared-components/activity-direction/ActivityDirection';

import './activity.css';

const propTypes = {
  activity: PropTypes.shape({
    id: PropTypes.number.isRequired,
    createdAt: PropTypes.string.isRequired,
    direction: PropTypes.string.isRequired,
    from: PropTypes.string.isRequired,
    to: PropTypes.string,
    via: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    isArchived: PropTypes.bool.isRequired,
    callType: PropTypes.string.isRequired,
  }).isRequired,
};

class Activity extends React.PureComponent {
  render() {
    const { activity } = this.props;
    return (
      <div className="activity">
        <ActivityDirection
          direction={activity.direction}
          callType={activity.callType}
        />
        <div className="activity_details">
          <span className="acitvity_from">
            {activity.from}
          </span>
          <span className="acitvity_to">
            {`Tried to call ${activity.to}`}
          </span>
          <span className="acitvity_duration">
            {`during ${moment.duration(Number(activity.duration), 'seconds').format('m [min], s [s]')} `}
          </span>
        </div>
        <Link to={`/details/${activity.id}`} className="activity_more-action">
          <MdInfo />
        </Link>
      </div>
    );
  }
}

Activity.propTypes = propTypes;

export default Activity;
