import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import { activitiesReducer as activities } from '../activities/reducers';
import { rootSaga } from '../sagas';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = composeWithDevTools({});

export const store = createStore(
  combineReducers({
    activities
  }),
  composeEnhancers(applyMiddleware(...[sagaMiddleware]))
);

sagaMiddleware.run(rootSaga);
