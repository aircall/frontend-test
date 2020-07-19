import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

import { callsSagas } from './callsSagas';

export const sagaMiddleware = createSagaMiddleware();

export function* rootSaga() {
  yield all([callsSagas]);
}
