import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { chain } from 'lodash';
import moment from 'moment';

import Activity from 'app/components/presentational/activity/Activity';
import Loader from 'app/components/presentational/loader/Loader';

import './activities.css';

class Activities extends Component {
  componentDidMount() {
    this.props.getAllActivities();
  }

  render() {
    const { activities, loading } = this.props;
    const activitiesByDate = chain(activities)
      .groupBy(activity => moment(activity.created_at).format('MMM Do YY'))
      .value();

    return (
      <div className="activities">
        {loading ? (
          <Loader />
        ) : (
          Object.keys(activitiesByDate).map(key => (
            <div key={key} className="activities__group">
              <h2 className="activities__group_date" data-date={key}>
                {key}
              </h2>
              <div className="activities__group_calls">
                {activitiesByDate[key].map(activity => <Activity key={activity.id} activity={activity} />)}
              </div>
            </div>
          ))
        )}
      </div>
    );
  }
}

Activities.propTypes = {
  activities: PropTypes.array.isRequired,
  getAllActivities: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
};

export default Activities;
