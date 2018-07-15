import {
  all
} from 'redux-saga/effects';

import {
  watchGetActivities,
  watchGetActivity,
  watchUpdateActivity
} from 'app/redux/sagas/activitiesSagas';

export default function* rootSaga() {
  const sagas = [
    watchGetActivities(),
    watchGetActivity(),
    watchUpdateActivity()
  ];

  yield all(sagas);
}
