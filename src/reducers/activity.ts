import { IActivity } from '../shared/api-types'
import { ActivityTypeKeys } from '../actions/activity'

export interface IActivityState {
  activities?: IActivity[]
  getActivitiesListIsFetching: boolean
  getActivitiesListIsError?: string
  activity?: IActivity
  getActivityIsFetching: boolean
  getActivityIsError?: string
  updateActivityIsFetching: boolean
  updateActivityIsError?: string
}

const userStateDefault: IActivityState = {
  getActivitiesListIsFetching: false,
  getActivityIsFetching: false,
  updateActivityIsFetching: false
}

export function user(state: IActivityState = userStateDefault, action: any): IActivityState {
  switch (action.type) {
    case ActivityTypeKeys.ACTIVITIES_LIST_FETCHING:
      return {
        ...state,
        getActivitiesListIsFetching: true,
        getActivitiesListIsError: undefined
      }

    case ActivityTypeKeys.ACTIVITIES_LIST_SUCCESS:
      return {
        ...state,
        getActivitiesListIsFetching: false,
        getActivitiesListIsError: undefined,
        activities: action.activities
      }

    case ActivityTypeKeys.ACTIVITIES_LIST_ERROR:
      return {
        ...state,
        getActivitiesListIsFetching: false,
        getActivitiesListIsError: action.error
      }

    case ActivityTypeKeys.ACTIVITY_FETCHING:
      return {
        ...state,
        getActivityIsFetching: true,
        getActivityIsError: undefined
      }

    case ActivityTypeKeys.ACTIVITY_SUCCESS:
      return {
        ...state,
        getActivityIsFetching: false,
        getActivityIsError: undefined,
        activity: action.activity
      }

    case ActivityTypeKeys.ACTIVITY_ERROR:
      return {
        ...state,
        getActivityIsFetching: false,
        getActivityIsError: action.error
      }

    case ActivityTypeKeys.UPDATE_ACTIVITY_FETCHING:
      return {
        ...state,
        updateActivityIsFetching: true,
        updateActivityIsError: undefined
      }

    case ActivityTypeKeys.UPDATE_ACTIVITY_SUCCESS:
      return {
        ...state,
        updateActivityIsFetching: false,
        updateActivityIsError: undefined,
        activity: action.activity
      }

    case ActivityTypeKeys.UPDATE_ACTIVITY_ERROR:
      return {
        ...state,
        updateActivityIsFetching: false,
        updateActivityIsError: action.error
      }
    default:
      return state
  }
}
