import {
  GET_ACTIVITIES,
  GET_ACTIVITIES_PENDING,
  GET_ACTIVITIES_SUCCESS,
  GET_ACTIVITIES_ERROR,
  GET_ACTIVITY,
  GET_ACTIVITY_PENDING,
  GET_ACTIVITY_SUCCESS,
  GET_ACTIVITY_ERROR,
  UPDATE_ACTIVITY,
  UPDATE_ACTIVITY_PENDING,
  UPDATE_ACTIVITY_SUCCESS,
  UPDATE_ACTIVITY_ERROR
} from 'redux/constants';

export const getActivities = () => ({
  type: GET_ACTIVITIES
});

export const getActivitiesPending = () => ({
  type: GET_ACTIVITIES_PENDING
});

export const getActivitiesSuccess = payload => ({
  type: GET_ACTIVITIES_SUCCESS,
  payload
});

export const getActivitiesError = () => ({
  type: GET_ACTIVITIES_ERROR
});

export const getActivity = id => ({
  type: GET_ACTIVITY,
  id
});

export const getActivityPending = () => ({
  type: GET_ACTIVITY_PENDING
});

export const getActivitySuccess = payload => ({
  type: GET_ACTIVITY_SUCCESS,
  payload
});

export const getActivityError = () => ({
  type: GET_ACTIVITY_ERROR
});

export const updateActivity = (id, isArchived) => ({
  type: UPDATE_ACTIVITY,
  id,
  isArchived
});

export const updateActivityPending = () => ({
  type: UPDATE_ACTIVITY_PENDING
});

export const updateActivitySuccess = payload => ({
  type: UPDATE_ACTIVITY_SUCCESS,
  payload
});

export const updateActivityError = () => ({
  type: UPDATE_ACTIVITY_ERROR
});
