import ACTIONS from './index'

export const getActivitiesAction = { type: ACTIONS.GET_ACTIVITIES }

export const setActivitiesAction = list => ({ type: ACTIONS.SET_ACTIVITIES, list })

export const getActivityDetailAction = id => ({ type: ACTIONS.GET_ACTIVITY_DETAIL, id })

export const setActivityDetailAction = detail => ({ type: ACTIONS.SET_ACTIVITY_DETAIL, detail })

export const archiveActivityAction = id => ({ type: ACTIONS.ARCHIVE_ACTIVITY, id })
