import { all, call } from 'redux-saga/effects';

import watchFetchActivities from './fetchActivities';

export default function* rootSaga() {
  yield all([
    call(watchFetchActivities),
  ]);
}
