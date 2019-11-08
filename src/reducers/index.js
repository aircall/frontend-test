import { combineReducers } from 'redux'
import activitiesReducer from './activities'

export default combineReducers({ activities: activitiesReducer })
