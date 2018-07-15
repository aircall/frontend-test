import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from 'sagas/index';
import * as reducers from 'app/redux/reducers';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = createStore(
  combineReducers({
    ...reducers
  }),
  compose(
    applyMiddleware(...middlewares),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

sagaMiddleware.run(rootSaga);

export default store;
