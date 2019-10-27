import { call, put, takeEvery } from 'redux-saga/effects';

import { fetchActivities } from '../actions/feed';
import { getResetAll } from '../apis/feedAPI';

export function* fetchResetAll() {
  yield call(getResetAll);
  yield put(fetchActivities());
}

export default function* watchResetAll() {
  yield takeEvery('RESET_ALL', fetchResetAll);
}
