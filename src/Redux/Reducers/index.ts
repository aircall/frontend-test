import { combineReducers } from "redux";

const initialState = {
  activities: [],
  error: null,
  isLoading: false,
  activityDetail: null
};

const entity = (state = initialState, action: any) => {
  switch (action.type) {
    case "FETCH_ACTIVITIES_REQUEST":
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case "FETCH_ACTIVITIES_ERROR":
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case "FETCH_ACTIVITIES_SUCCESS":
      return {
        ...state,
        activities: action.payload,
        isLoading: false,
        error: null
      };
    default:
      return state;
  }
};

const reducers = combineReducers({ entity });
export default reducers;
