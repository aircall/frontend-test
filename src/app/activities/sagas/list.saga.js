import { takeEvery, put, call } from 'redux-saga/effects';

import { endpoints } from '../../config/api-endpoints';
import {
  fetchActivityDetailsCompleted,
  fetchActivityListFailed,
  FETCH_ACTIVITY_LIST
} from '../actions/list.actions';

export function* fetchList() {
   try {
    const response = yield call(fetch, endpoints.activityList.url);
    const parsedResponse = yield response.json();

    if (response.ok) {
      yield put(fetchActivityDetailsCompleted(parsedResponse));
    } else {
      yield put(fetchActivityListFailed(parsedResponse));
    }
  } catch (error) {
    yield put(fetchActivityListFailed(error));
  }
};

export function* watchFetchActivityList() {
  yield takeEvery(FETCH_ACTIVITY_LIST, fetchList);
};
