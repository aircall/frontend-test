import {
  takeEvery,
  put,
  call
} from 'redux-saga/effects';

import {
  getActivitiesPending,
  getActivitiesSuccess,
  getActivitiesError,
  getActivityPending,
  getActivitySuccess,
  getActivityError,
  updateActivityPending,
  updateActivitySuccess,
  updateActivityError
} from 'app/redux/actions/activitiesActions';
import endpoints from 'utils/endpoints';
import {
  ERROR,
  GET_ACTIVITIES,
  GET_ACTIVITY,
  UPDATE_ACTIVITY
} from 'redux/constants';

export function* getActivities() {
  yield put(getActivitiesPending());

  try {
    const response = yield call(fetch, endpoints.ACTIVITIES.INDEX.url);

    const result = yield response.json();

    if (response.ok) {
      yield put(
        getActivitiesSuccess(result)
      );
    } else {
      yield put(getActivitiesError(result));
    }
  } catch (error) {
    yield put({
      type: ERROR,
      error
    });
  }
}

export function* getActivity(action) {
  yield put(getActivityPending());

  try {
    const response = yield call(fetch, endpoints.ACTIVITIES.SHOW.url.replace(/{activityId}/, action.id));

    const result = yield response.json();

    if (response.ok) {
      yield put(
        getActivitySuccess(result)
      );
    } else {
      yield put(getActivityError(result));
    }
  } catch (error) {
    yield put({
      type: ERROR,
      error
    });
  }
}

export function* updateActivity(action) {
  console.log('action: ', action);
  yield put(updateActivityPending());

  try {
    const response = yield call(
      fetch,
      endpoints.ACTIVITIES.UPDATE.url.replace(/{activityId}/, action.id), {
        method: endpoints.ACTIVITIES.UPDATE.verb,
        body: JSON.stringify({
          is_archived: action.isArchived
        })
      }
    );

    const result = yield response.json();

    if (response.ok) {
      yield put(
        updateActivitySuccess(result)
      );
    } else {
      yield put(updateActivityError(result));
    }
  } catch (error) {
    yield put({
      type: ERROR,
      error
    });
  }
}

export function* watchGetActivities() {
  yield takeEvery(GET_ACTIVITIES, getActivities);
}

export function* watchGetActivity() {
  yield takeEvery(GET_ACTIVITY, getActivity);
}

export function* watchUpdateActivity() {
  yield takeEvery(UPDATE_ACTIVITY, updateActivity);
}
