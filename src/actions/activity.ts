import api from '../api'
import { IActivity } from '../shared/api-types'
import { KThunkAction } from './helpers'

export enum ActivityTypeKeys {
  ACTIVITIES_LIST_FETCHING = 'ACTIVITIES_LIST_FETCHING',
  ACTIVITIES_LIST_SUCCESS = 'ACTIVITIES_LIST_SUCCESS',
  ACTIVITIES_LIST_ERROR = 'ACTIVITIES_LIST_ERROR',

  ACTIVITY_FETCHING = 'ACTIVITY_FETCHING',
  ACTIVITY_SUCCESS = 'ACTIVITY_SUCCESS',
  ACTIVITY_ERROR = 'ACTIVITY_ERROR',

  UPDATE_ACTIVITY_FETCHING = 'UPDATE_ACTIVITY_FETCHING',
  UPDATE_ACTIVITY_SUCCESS = 'UPDATE_ACTIVITY_SUCCESS',
  UPDATE_ACTIVITY_ERROR = 'UPDATE_ACTIVITY_ERROR'
}

export type ActivityActions =
  | IActivitiesListFetchingAction
  | IActivitiesListSuccessAction
  | IActivitiesListErrorAction
  | IActivityFetchingAction
  | IActivitySuccessAction
  | IActivityErrorAction
  | IUpdateActivityFetchingAction
  | IUpdateActivitySuccessAction
  | IUpdateActivityErrorAction

// GET ACTIVITIES LIST
export interface IActivitiesListFetchingAction {
  type: ActivityTypeKeys.ACTIVITIES_LIST_FETCHING
}

export interface IActivitiesListSuccessAction {
  type: ActivityTypeKeys.ACTIVITIES_LIST_SUCCESS
  activities: IActivity[]
}

export interface IActivitiesListErrorAction {
  type: ActivityTypeKeys.ACTIVITIES_LIST_ERROR
  error: string
}

export function activitiesListFetching(): IActivitiesListFetchingAction {
  return {
    type: ActivityTypeKeys.ACTIVITIES_LIST_FETCHING
  }
}

export function activitiesListSuccess(activities: IActivity[]): IActivitiesListSuccessAction {
  return {
    type: ActivityTypeKeys.ACTIVITIES_LIST_SUCCESS,
    activities
  }
}

export function activitiesListError(error: string): IActivitiesListErrorAction {
  return {
    type: ActivityTypeKeys.ACTIVITIES_LIST_ERROR,
    error
  }
}

export function doGetActivitiesList(): KThunkAction {
  return async (dispatch) => {
    dispatch(activitiesListFetching())
    try {
      const activitiesResponse = await api.activity.getActivitiesList()
      dispatch(activitiesListSuccess(activitiesResponse.activities))
    } catch (err) {
      dispatch(activitiesListError(err))
    }
  }
}

// GET ACTIVITY BY ID
export interface IActivityFetchingAction {
  type: ActivityTypeKeys.ACTIVITY_FETCHING
}

export interface IActivitySuccessAction {
  type: ActivityTypeKeys.ACTIVITY_SUCCESS
  activity: IActivity
}

export interface IActivityErrorAction {
  type: ActivityTypeKeys.ACTIVITY_ERROR
  error: string
}

export function activityFetching(): IActivityFetchingAction {
  return {
    type: ActivityTypeKeys.ACTIVITY_FETCHING
  }
}

export function activitySuccess(activity: IActivity): IActivitySuccessAction {
  return {
    type: ActivityTypeKeys.ACTIVITY_SUCCESS,
    activity
  }
}

export function activityError(error: string): IActivityErrorAction {
  return {
    type: ActivityTypeKeys.ACTIVITY_ERROR,
    error
  }
}

export function doGetActivity(id: string): KThunkAction {
  return async (dispatch) => {
    dispatch(activityFetching())
    try {
      const activityResponse = await api.activity.getActivityById(id)
      dispatch(activitySuccess(activityResponse.activity))
    } catch (err) {
      dispatch(activityError(err))
    }
  }
}

// UPDATE ACTIVITY
export interface IUpdateActivityFetchingAction {
  type: ActivityTypeKeys.UPDATE_ACTIVITY_FETCHING
}

export interface IUpdateActivitySuccessAction {
  type: ActivityTypeKeys.UPDATE_ACTIVITY_SUCCESS
  activity: IActivity
}

export interface IUpdateActivityErrorAction {
  type: ActivityTypeKeys.UPDATE_ACTIVITY_ERROR
  error: string
}

export function updateActivityFetching(): IUpdateActivityFetchingAction {
  return {
    type: ActivityTypeKeys.UPDATE_ACTIVITY_FETCHING
  }
}

export function updateActivitySuccess(activity: IActivity): IUpdateActivitySuccessAction {
  return {
    type: ActivityTypeKeys.UPDATE_ACTIVITY_SUCCESS,
    activity
  }
}

export function updateActivityError(error: string): IUpdateActivityErrorAction {
  return {
    type: ActivityTypeKeys.UPDATE_ACTIVITY_ERROR,
    error
  }
}

export function doUpdateActivity(id: string, is_archived: boolean): KThunkAction {
  return async (dispatch) => {
    dispatch(updateActivityFetching())
    try {
      const activityResponse = await api.activity.updateActivity(id, is_archived)
      dispatch(updateActivitySuccess(activityResponse.activity))
    } catch (err) {
      dispatch(updateActivityError(err))
    }
  }
}
