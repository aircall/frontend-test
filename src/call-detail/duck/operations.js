import fetch from "cross-fetch";
import Creators from "./actions";

const requestCallDetailAction = Creators.requestCallDetail;
const receiveCallDetailAction = Creators.receiveCallDetail;

// 'fetchCallDetail()' will fetch the activities
const fetchCallDetail = id => {
  return dispatch => {
    // Dispatching this action will toggle the 'loading'
    // flag in the store, so that the UI can show a loading icon.
    dispatch(requestCallDetailAction());
    return fetch(`https://aircall-job.herokuapp.com/activities/${id}`)
      .then(response => response.json())
      .then(json => {
        dispatch(receiveCallDetailAction(json));
      });
  };
};

export default {
  fetchCallDetail
};
