import types from "./types";

const INITIAL_STATE = {
  loading: false,
  activities: []
};
const activityFeedReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.REQUEST_ACTIVITIES: {
      return {
        ...state,
        loading: true
      };
    }

    case types.RECEIVE_ACTIVITIES: {
      const { activities } = action;
      return {
        ...state,
        activities,
        loading: false
      };
    }

    default:
      return state;
  }
};

export default activityFeedReducer;
