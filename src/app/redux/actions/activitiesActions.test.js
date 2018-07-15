import {
  GET_ACTIVITIES,
  GET_ACTIVITIES_PENDING,
  GET_ACTIVITIES_SUCCESS,
  GET_ACTIVITIES_ERROR
} from 'redux/constants';
import {
  activity
} from 'utils/mocks';
import {
  getActivities,
  getActivitiesPending,
  getActivitiesSuccess,
  getActivitiesError
} from './activitiesActions';

describe('test activitiesActions', () => {
  it('should get Activities', () => {
    expect(getActivities()).toEqual({
      type: GET_ACTIVITIES
    });
  });

  it('should get Pending Activities', () => {
    expect(getActivitiesPending()).toEqual({
      type: GET_ACTIVITIES_PENDING
    });
  });

  it('should get Activities Successfully', () => {
    expect(getActivitiesSuccess([activity])).toEqual({
      type: GET_ACTIVITIES_SUCCESS,
      payload: [activity]
    });
  });

  it('should send Activities Error', () => {
    expect(getActivitiesError()).toEqual({
      type: GET_ACTIVITIES_ERROR
    });
  });
});
