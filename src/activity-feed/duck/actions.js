import types from "./types.js";

const requestActivities = () => {
  return {
    type: types.REQUEST_ACTIVITIES
  };
};

const receiveActivities = data => {
  return {
    type: types.RECEIVE_ACTIVITIES,
    activities: data
  };
};

export default {
  requestActivities,
  receiveActivities
};
