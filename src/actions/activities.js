import ACTIONS from './index'

export const getActivitiesAction = { type: ACTIONS.GET_ACTIVITIES }

export const setActivities = (list) => ({ type: ACTIONS.SET_ACTIVITIES, list })
