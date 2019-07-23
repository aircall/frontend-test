import { combineReducers } from 'redux'
import calls from './calls/reducer.js'
import { routerReducer } from 'react-router-redux'

export default combineReducers({
    calls,
    routing: routerReducer
})