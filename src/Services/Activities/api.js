import axios from 'axios';
import {
  fetchPayloadActivitiesSuccess,
  fetchPayloadActivitiesError,

  updatePayloadActivitiesSuccess,
  updatePayloadActivitiesError,

  resetPayloadActivitiesSuccess,
  resetPayloadActivitiesError,

  fetchPayloadActivitySuccess,
  fetchPayloadActivityError,

  updatePayloadActivitySuccess,
  updatePayloadActivityError,
} from './actions';

//LOADING
import {
  isLoading,
  isLoaded
} from './../Commons/Loading/actions.js'
import {
  openDetails,
  closeDetails
} from './../OpenDetails/actions.js'
import {
  currentNavIsInbox,
  currentNavIsAll
} from './../Commons/Nav/actions.js'

import {
  hostAPI
} from './../../constants/settings';


export const fetchActivities = (currentNav = 'all') => async dispatch => {
  dispatch(isLoading())
  const url = `${hostAPI}/activities`
  await axios.get(url)
    .then(async (data) => {
      dispatch(isLoaded())
      if (currentNav === 'inbox' && [...data.data].length) {
        dispatch(currentNavIsInbox())
        data.data = [...data.data].filter(activity => !activity.is_archived);
      } else {
        dispatch(currentNavIsAll())
      }
      dispatch(fetchPayloadActivitiesSuccess([...data.data]))
    })
    .catch((error) => dispatch(fetchPayloadActivitiesError(error)))
}

export const archiveActivities = activities => async dispatch => {
  dispatch(isLoading())
  Promise.all(
      activities.map(async activity => {
        const url = `${hostAPI}/activities/${activity.id}`;
        await axios.post(url, {
          "is_archived": true
        });
      }))
    .then(async (data) => {
      dispatch(isLoaded())
      dispatch(updatePayloadActivitiesSuccess())
    })
    .catch(error => dispatch(updatePayloadActivitiesError(error)))
};

export const resetActivities = () => async dispatch => {
  dispatch(isLoading())
  const url = `${hostAPI}/reset`;
  await axios.get(url)
    .then((data) => {
      dispatch(isLoaded())
      dispatch(resetPayloadActivitiesSuccess(data))
    })
    .catch((error) => dispatch(resetPayloadActivitiesError(error)))
}


export const archivesActivity = (activityId) => async dispatch => {
  dispatch(isLoading())
  const url = `${hostAPI}/activities/${activityId}`
  await axios.post(url, {
      "is_archived": true
    })
    .then((data) => {
      dispatch(isLoaded())
      dispatch(updatePayloadActivitySuccess(data.data))
      dispatch(closeDetails())
    })
    .catch((error) => dispatch(updatePayloadActivityError(error)))
}

export const fetchActivity = (activityId) => async dispatch => {
  dispatch(isLoading())
  const url = `${hostAPI}/activities/${activityId}`;
  await axios.get(url)
    .then((data) => {
      dispatch(isLoaded())
      dispatch(fetchPayloadActivitySuccess(data.data))
      dispatch(openDetails())
    })
    .catch((error) => dispatch(fetchPayloadActivityError(error)))
}