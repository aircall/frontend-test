import { all, call } from 'redux-saga/effects';

import watchFetchActivities from './fetchActivities';
import watchFetchDetail from './fetchDetail';

export default function* rootSaga() {
  yield all([
    call(watchFetchActivities),
    call(watchFetchDetail),
  ]);
}
