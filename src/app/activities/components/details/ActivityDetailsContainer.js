import { connect } from 'react-redux';
import moment from 'moment';

import { fetchActivityDetails } from '../../actions/details.actions';

import { ActivityDetails } from './ActivityDetails';

export function decorateActivity(activity) {
  const createdDate = moment(activity['created_at']);

  return Object.assign({}, {
    id: activity['id'],
    type: activity['call_type'],
    via: activity['via'],
    direction: activity['direction'],
    from: activity['from'],
    to: activity['to'],
    duration: activity['duration'],
    date: createdDate.format('MMMM, DD YYYY'),
    time: createdDate.format('HH:mm'),
    createdDate
  });
};

const mapStateToProps = ({ activities }) => ({
  activity: decorateActivity(activities.details.data),
  loading: activities.details.loading,
  loadError: activities.details.loadError
});

const mapDispatchToProps = (dispatch) => ({
  fetchActivityDetails: (activityID) =>
    dispatch(fetchActivityDetails(activityID))
});

export const ActivityDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivityDetails);
