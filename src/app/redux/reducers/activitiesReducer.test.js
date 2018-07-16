import {
  GET_ACTIVITIES_PENDING,
  GET_ACTIVITIES_SUCCESS,
  GET_ACTIVITY_SUCCESS,
  UPDATE_ACTIVITY_SUCCESS
} from 'redux/constants';
import {
  activity
} from 'utils/mocks';

import activitiesReducer, {
  initialState
} from './activitiesReducer';

describe('activitiesReducer', () => {
  it('should return initial state', () => {
    expect(
      activitiesReducer(initialState, {})
    ).toEqual(initialState);
  });

  it('should set LOADING when pending', () => {
    expect(
      activitiesReducer(initialState, {
        type: GET_ACTIVITIES_PENDING
      })
    ).toEqual({
      ...initialState,
      loading: true
    });
  });

  it('should set activities on GET_ACTIVITIES_SUCCESS', () => {
    expect(
      activitiesReducer(initialState, {
        type: GET_ACTIVITIES_SUCCESS,
        payload: [activity, activity]
      })
    ).toEqual({
      ...initialState,
      loading: false,
      activities: [activity, activity]
    });
  });

  it('should set activity on GET_ACTIVITY_SUCCESS', () => {
    expect(
      activitiesReducer(initialState, {
        type: GET_ACTIVITY_SUCCESS,
        payload: activity
      })
    ).toEqual({
      ...initialState,
      activity
    });
  });

  it('should update activity is_archived on UPDATE_ACTIVITY_SUCCESS', () => {
    expect(
      activitiesReducer(initialState, {
        type: GET_ACTIVITY_SUCCESS,
        payload: {
          ...activity,
          is_archived: true
        }
      })
    ).toEqual({
      ...initialState,
      activity: {
        ...activity,
        is_archived: true
      }
    });
  });
});
