import { combineReducers } from "redux";

const initialState = {
  activities: [],
  error: null,
  isLoading: false,
  activityDetail: null
};

const entity = (state = initialState, action: any) => {
  switch (action.type) {
    case "INIT":
      return state;
    default:
      return state;
  }
};

const reducers = combineReducers({ entity });
export default reducers;
