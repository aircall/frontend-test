import { types } from '../reducers/activity-reducers';
import axios from 'axios';

export const useActions = (state, dispatch) => {
  // Fetching all feed activities
  const getActivities = async () => {
    dispatch({ type: types.LOADING_START });
    try {
      const response = await axios.get(
        'https://aircall-job.herokuapp.com/activities'
      );
      dispatch({ type: types.GET_ACTIVITIES_SUCCESS, payload: response.data });
    } catch (err) {
      dispatch({ type: types.GET_ACTIVITIES_ERROR });
    }
  };

  // Fetching activity details
  const getActivityDetails = async (id) => {
    dispatch({ type: types.LOADING_START });
    try {
      const response = await axios.get(
        `https://aircall-job.herokuapp.com/activities/${id}`
      );
      dispatch({ type: types.GET_DETAILS_SUCCESS, payload: response.data });
    } catch (err) {
      dispatch({ type: types.GET_DETAILS_ERROR });
    }
  };

  return {
    getActivities,
    getActivityDetails,
  };
};
