import { combineReducers } from "redux";
import { formateCompleteData } from "../../utils";
import { IActivity } from "../../types";

const initialState = {
  activities: [],
  error: null,
  isLoading: false,
  activityDetail: null
};

const entity = (state = initialState, action: any) => {
  switch (action.type) {
    case "FETCH_ACTIVITIES_REQUEST":
    case "FETCH_ACTIVITY_DETAIL_REQUEST":
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case "FETCH_ACTIVITIES_ERROR":
    case "FETCH_ACTIVITY_DETAIL_ERROR":
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
    case "FETCH_ACTIVITY_DETAIL_SUCCESS":
      const activityDetail = {
        ...action.payload,
        created_at: formateCompleteData(action.payload.created_at)
      };
      return {
        ...state,
        activityDetail,
        isLoading: false,
        error: null
      };
    case "ARCHIVE_ACTIVITY":
      const activityId = action.payload;
      const activities = state.activities.map((activity: IActivity) => {
        if (activity.id === activityId) {
          return {
            ...activity,
            is_archived: true
          };
        }
        return activity;
      });
      return {
        ...state,
        activities
      };
    case "RESET_ACTIVITY":
      const id = action.payload;
      const activitiesMapped = state.activities.map((activity: IActivity) => {
        if (activity.id === id) {
          return {
            ...activity,
            is_archived: false
          };
        }
        return activity;
      });
      return {
        ...state,
        activities: activitiesMapped
      };
    default:
      return state;
  }
};

const reducers = combineReducers({ entity });
export default reducers;
