import { all } from 'redux-saga/effects';

import { watchFetchActivityList } from './list.saga';
import { watchFetchActivityDetails } from './details.saga';

export function* activitiesSaga() {
  yield all([
    watchFetchActivityList(),
    watchFetchActivityDetails()
  ]);
};
