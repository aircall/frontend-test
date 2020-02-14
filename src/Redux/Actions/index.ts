import * as constants from "../Constants";

import { IActivity, TDispatch, TAction } from "../../types";
import { fetchActivities } from "../../api";
export const fetchActivitiesRequest = (): TAction => ({
  type: constants.FETCH_ACTIVITIES_REQUEST
});

export const fetchActivitiesError = (error: string): TAction => ({
  payload: error,
  type: constants.FETCH_ACTIVITIES_ERROR
});

export const fetchActivitiesSuccess = (payload: IActivity[]): TAction => ({
  payload,
  type: constants.FETCH_ACTIVITIES_SUCCESS
});

export const fetchActivitiesAction = () => (dispatch: TDispatch) => {
  dispatch(fetchActivitiesRequest());
  return fetchActivities()
    .then((payload: IActivity[]) => dispatch(fetchActivitiesSuccess(payload)))
    .catch(error => dispatch(fetchActivitiesError(error.message)));
};
