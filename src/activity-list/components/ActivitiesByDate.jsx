import React from 'react';
import PropTypes from 'prop-types';

import Activity from './Activity';

const propTypes = {
  activities: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      createdAt: PropTypes.string.isRequired,
      direction: PropTypes.string.isRequired,
      from: PropTypes.string.isRequired,
      to: PropTypes.string,
      via: PropTypes.string.isRequired,
      duration: PropTypes.string.isRequired,
      isArchived: PropTypes.bool.isRequired,
      callType: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

class ActivitiesByDate extends React.Component {
  render() {
    const { activities } = this.props;
    return (
      activities.map(activity => (
        <Activity key={activity.id} activity={activity} />
      ))
    );
  }
}

ActivitiesByDate.propTypes = propTypes;

export default ActivitiesByDate;
