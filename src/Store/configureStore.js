import {compose, createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

// Middleware
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import rootReducers from './rootReducers'

/* eslint-disable no-underscore-dangle */
const initState = {}
// const loggerMiddleware = createLogger({
//   predicate: () => process.env.NODE_ENV === 'development',
// });
const middlewareList = [thunk, logger]
// const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

export default function configureStore (INITIAL_STATE=initState, history){
 return createStore(
   rootReducers,
   INITIAL_STATE,
   compose(applyMiddleware(...middlewareList)),
 );
}
/* eslint-enable */
