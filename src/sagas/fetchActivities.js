import { call, put, takeEvery } from 'redux-saga/effects';

import { getFeeds } from '../apis/feedAPI';
import { receiveActivities } from '../actions/feed';

export function* fetchActivities() {
  const results = yield call(getFeeds);
  yield put(receiveActivities(results));
}

export default function* watchFetchActivities() {
  yield takeEvery('FETCH_ACTIVITIES', fetchActivities);
}
