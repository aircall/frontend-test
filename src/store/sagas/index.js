import { takeEvery } from 'redux-saga/effects';
import { getCallsSaga } from './getCallsSaga';
import { INITIATE_GET_CALLS_SAGA } from '../actions/actionTypes';

export function* watcherSaga() {
  yield takeEvery(INITIATE_GET_CALLS_SAGA, getCallsSaga);
}
