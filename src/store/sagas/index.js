import { takeEvery } from 'redux-saga/effects';
import { getCallsSaga, getSingleSaga } from './callsSaga';
import { INITIATE_GET_CALLS_SAGA, INITIATE_SINGLE_CALL_SAGA } from '../actions/actionTypes';

export function* watcherSaga() {
  yield takeEvery(INITIATE_GET_CALLS_SAGA, getCallsSaga);
  yield takeEvery(INITIATE_SINGLE_CALL_SAGA, getSingleSaga);
}
