import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import { watcherSaga } from './sagas/index';

const sagaMiddleWare = createSagaMiddleware();
const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(sagaMiddleWare),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

sagaMiddleWare.run(watcherSaga);

export default store;