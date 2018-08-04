import { takeEvery, put, call } from 'redux-saga/effects';

import { endpoints } from '../../config/api-endpoints';
import {
  fetchActivityDetailsCompleted,
  fetchActivityDetailsFailed,
  FETCH_ACTIVITY_DETAILS
} from '../actions/details.actions';

export function* fetchDetails(action) {
  try {
    const response = yield call(
      fetch,
      endpoints.activityDetails.url.replace('{{activityID}}', action.payload)
    );
    const parsedResponse = yield response.json();

    if (response.ok) {
      yield put(fetchActivityDetailsCompleted(parsedResponse));
    } else {
      yield put(fetchActivityDetailsFailed(parsedResponse));
    }
  } catch (error) {
    yield put(fetchActivityDetailsFailed(error));
  }
};

export function* watchFetchActivityDetails() {
  yield takeEvery(FETCH_ACTIVITY_DETAILS, fetchDetails);
};
