import React from 'react';
import moment from 'moment';

import { groupByDate } from '../utils';
import Activity from '../models/Activity';
import ActivitiesByDate from './components/ActivitiesByDate';
import Loader from '../shared-components/loader/Loader';

import './activity-list.css';

class ActivityList extends React.Component {
  constructor() {
    super();
    this.state = {
      activities: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    Activity.getAll()
      .then(activities => this.setState({ acitvities: activities, isLoading: false }));
  }

  render() {
    const { acitvities, isLoading } = this.state;
    if (!isLoading) {
      const activitiesByDate = groupByDate(acitvities, 'createdAt');
      const descSortedDateOfActivities = Object.keys(activitiesByDate).sort((a, b) => (moment(a, 'll').isAfter(moment(b, 'll')) ? -1 : 1));
      return (
        descSortedDateOfActivities.map(displayDate => (
          <div key={displayDate} className="activity-date-row">
            <span className="activity-date-row_header">
              {displayDate}
            </span>
            <div className="activity-date-row_activities">
              <ActivitiesByDate activities={activitiesByDate[displayDate]} />
            </div>
          </div>
        ))
      );
    }

    return (
      <Loader />
    );
  }
}

export default ActivityList;
