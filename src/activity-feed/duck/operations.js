import fetch from "cross-fetch";
import Creators from "./actions";

const requestActivitiesAction = Creators.requestActivities;
const receiveActivitiesAction = Creators.receiveActivities;

// 'fetchActivities()' will fetch the activities
const fetchActivities = () => {
  return dispatch => {
    // Dispatching this action will toggle the 'loading'
    // flag in the store, so that the UI can show a loading icon.
    dispatch(requestActivitiesAction());
    return fetch("https://aircall-job.herokuapp.com/activities")
      .then(response => response.json())
      .then(json => {
        dispatch(receiveActivitiesAction(json));
      });
  };
};

export default {
  fetchActivities
};
