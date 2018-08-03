import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Loader } from '../../../shared/Loader';
import { ActivityItem } from '../shared';

import './ActivityDetails.css';

class ActivityDetails extends Component {
  componentDidMount() {
    const { id: activityID } = this.props.match.params;

    this.props.fetchActivityDetails(activityID);
  }

  render() {
    const { activity, loading, loadError, archiveActivity } = this.props;

    if (loading) {
      return (<Loader />);
    }

    if (loadError) {
      return (<Error message={loadError} />);
    }

    return (
      <div className="activity-details-wrapper">
        <ActivityItem activity={activity} />
        <div className="activity-details">
          <div className="activity-time">
            <p>Called on&nbsp;
              <strong>{activity.date}</strong>
              &nbsp;at&nbsp;
              <strong>{activity.time}</strong>
            </p>
          </div>
          { (activity.type !== 'voicemail')
              ? <div className="activity-duration">
                <p>Call duration:&nbsp;
                  <strong>{activity.duration}</strong>
                  &nbsp;seconds
                </p>
              </div>
              : null
          }
        </div>
      </div>
    );
  }
};

ActivityDetails.propTypes = {
  activity: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  loadError: PropTypes.string,
  fetchActivityDetails: PropTypes.func.isRequired
};

export { ActivityDetails };
