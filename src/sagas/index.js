import { all, call } from 'redux-saga/effects';

import watchFetchActivities from './fetchActivities';
import watchFetchDetail from './fetchDetail';
import watchArchiveCall from './archiveCall';
import watchResetAll from './resetAll';

export default function* rootSaga() {
  yield all([
    call(watchFetchActivities),
    call(watchFetchDetail),
    call(watchArchiveCall),
    call(watchResetAll),
  ]);
}
