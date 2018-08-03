import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Loader } from '../../../shared/Loader';
import { ActivityItem } from '../shared';

import './ActivityList.css';

class ActivityList extends Component {
  componentDidMount() {
    this.props.fetchActivityList();
  }

  renderGroup(groupDate, activities) {
    return (
      <div className="activity-group" key={groupDate}>
        <div className="activity-group-header">{groupDate}</div>
        { activities.map((activity) => (
          <Link to={`/activities/${activity.id}`} key={activity.id}>
            <ActivityItem activity={activity} showTime={true} />
          </Link>
        ))}
      </div>
    );
  }

  render() {
    const { activities, loading, loadError } = this.props;

    if (loading) {
      return (<Loader />);
    }

    if (loadError) {
      return (<Error message={loadError} />);
    }

    const groupsByDate = Object.keys(activities);

    return (
      <div className="activity-list">
        {groupsByDate.map((groupDate) =>
          this.renderGroup(groupDate, activities[groupDate])
        )}
      </div>
    );
  }
}

ActivityList.propTypes = {
  activities: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  loadError: PropTypes.string,
  fetchActivityList: PropTypes.func.isRequired
};

export { ActivityList };
