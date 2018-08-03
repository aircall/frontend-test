import { all } from 'redux-saga/effects';

import { activitiesSaga } from '../activities/sagas';

export function* rootSaga() {
  yield all([
    activitiesSaga()
  ]);
};
