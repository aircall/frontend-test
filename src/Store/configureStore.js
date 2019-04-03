import { compose, createStore, applyMiddleware } from 'redux'

// Middleware
import thunk from 'redux-thunk'
import rootReducers from './rootReducers'

/* eslint-disable no-underscore-dangle */
const initState = {}

let middlewareList = [thunk]

export default function configureStore(INITIAL_STATE = initState) {
  return createStore(rootReducers, INITIAL_STATE, compose(applyMiddleware(...middlewareList)))
}
/* eslint-enable */
