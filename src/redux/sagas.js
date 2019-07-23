import { all } from 'redux-saga/effects';
import callSagas from './calls/sagas.js';

export default function* rootSaga(getState) {
  yield all([
    callSagas(),
  ]);
}
