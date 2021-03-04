import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

import { callsSagas } from './callsSagas';
import { archiveCallSagas } from '../detail/sagas';

export const sagaMiddleware = createSagaMiddleware();

export function* rootSaga() {
  yield all([callsSagas, archiveCallSagas]);
}
