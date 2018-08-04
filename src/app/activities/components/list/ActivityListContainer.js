import { connect } from 'react-redux';
import groupBy from 'lodash.groupby';

import { fetchActivityList } from '../../actions/list.actions';

import { ActivityList } from './ActivityList';

import { decorateActivity } from '../details/ActivityDetailsContainer';

function decorateActivities(activities) {
  return [...activities].map(decorateActivity);
}

function groupActivities(activities) {
  return groupBy(activities, (activity) => activity.date);
}

const mapStateToProps = ({ activities }) => ({
  activities: groupActivities(
    decorateActivities(
      activities.list.data
        .filter((activity) => !activity['is_archived'])
    )
  ),
  loading: activities.list.loading,
  loadError: activities.list.loadError
});

const mapDispatchToProps = (dispatch) => ({
  fetchActivityList: () => dispatch(fetchActivityList())
});

export const ActivityListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivityList);
