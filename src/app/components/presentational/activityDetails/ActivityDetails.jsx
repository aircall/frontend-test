import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { parseActivityStatus } from 'utils/activityUtils';

import './activityDetails.css';
import Avatar from '../avatar/Avatar';

class ActivityDetails extends Component {
  componentDidMount() {
    const { match: { params: { id } } } = this.props;

    this.props.onGetActivity(id);
  }

  render() {
    const { activity, onUpdateActivity } = this.props;

    return (
      <div className="activityDetails">
        <Avatar
          src="http://www.kinkylittleboots.com/wp-content/uploads/2018/03/Robert-Downey-Jr.jpg"
          alt={`${activity.from} avatar image`}
        />
        <h1 className="activityDetails__from">{activity.from}</h1>
        <h2 className="activityDetails__status">{parseActivityStatus(activity)}</h2>
        <div className="activityDetails__toggle">
          <input
            type="checkbox"
            name="archive"
            id="archive"
            className="toggle"
            checked={!activity.is_archived}
            onChange={e => onUpdateActivity(activity.id, e.target.value)}
          />
          <label htmlFor="archive" className="toggleLabel" data-off="Archived" data-on="Active" />
        </div>
      </div>
    );
  }
}

ActivityDetails.propTypes = {
  onGetActivity: PropTypes.func.isRequired,
  onUpdateActivity: PropTypes.func.isRequired,
  activity: PropTypes.object.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  }).isRequired
};

export default withRouter(ActivityDetails);
