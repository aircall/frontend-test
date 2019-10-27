import { put, takeEvery } from 'redux-saga/effects';

const delay = (ms) => new Promise(res => setTimeout(res, ms))

export function* incrementAsync() {
  yield delay(1000);
  yield put({ type: 'INCREMENT' });
}

export default function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}
