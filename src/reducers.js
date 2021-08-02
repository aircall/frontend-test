import { combineReducers } from "redux";
import activityFeedReducer from "./activity-feed/duck";
import callDetailReducer from "./call-detail/duck";

const rootReducer = combineReducers({
  activityFeed: activityFeedReducer,
  callDetail: callDetailReducer
});

export default rootReducer;
