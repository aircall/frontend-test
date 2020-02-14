import * as constants from "../Constants";

import { IActivity, TDispatch, TAction } from "../../types";
import { fetchActivities, fetchActivityDetail } from "../../api";

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

export const fetchActivityDetailRequest = (): TAction => ({
  type: constants.FETCH_ACTIVITY_DETAIL_REQUEST
});

export const fetchActivityDetailError = (error: string): TAction => ({
  payload: error,
  type: constants.FETCH_ACTIVITY_DETAIL_ERROR
});

export const fetchActivityDetailSuccess = (payload: IActivity): TAction => ({
  payload,
  type: constants.FETCH_ACTIVITY_DETAIL_SUCCESS
});

export const fetchActivityDetailAction = (id: string) => (
  dispatch: TDispatch
) => {
  dispatch(fetchActivityDetailRequest());
  return fetchActivityDetail(id)
    .then((response: IActivity) =>
      dispatch(fetchActivityDetailSuccess(response))
    )
    .catch((error: Error) => dispatch(fetchActivityDetailError(error.message)));
};
