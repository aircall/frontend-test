import { all, call, put, takeEvery } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { 
  GET_CALLS, GET_CALLS_SUCCESS, GET_CALLS_ERROR,
  GET_CALL, GET_CALL_SUCCESS, GET_CALL_ERROR,
  ARCHIVE_CALL, ARCHIVE_CALL_SUCCESS, ARCHIVE_CALL_ERROR,
  ARCHIVE_CALLS, ARCHIVE_CALLS_SUCCESS, ARCHIVE_CALLS_ERROR
} from './actionsTypes.js';
import { callApi } from '../../utils/api.js'

// Get calls
function* getCalls() {
  try {
    const callsFetched = yield call(callApi, 'GET', '/activities');
    yield put({ type: GET_CALLS_SUCCESS, calls: callsFetched });
  } catch (error) {
    yield put({ type: GET_CALLS_ERROR, error: error });
  }
}

// Get call
function* getCall(action) {
  const { id } = action;
  try {
    const callFetched = yield call(callApi, 'GET', `/activities/${id}`);
    yield put({ type: GET_CALL_SUCCESS, call: callFetched });
  } catch (error) {
    yield put({ type: GET_CALL_ERROR, error: error });
  }
}

// Archive call
function* archiveCall(action) {
  const { id } = action;
  try {
    const callFetched = yield call(callApi, 'POST', `/activities/${id}`, {is_archived: true});
    yield put({ type: ARCHIVE_CALL_SUCCESS, call: callFetched });
    yield put(push('/'));
  } catch (error) {
    yield put({ type: ARCHIVE_CALL_ERROR, error: error });
  }
}


// Archive call
function* archiveCalls() {
  try {
    const callFetched = yield call(callApi, 'GET', `/reset/`);
    yield put({ type: ARCHIVE_CALLS_SUCCESS, call: callFetched });
    yield put({ type: GET_CALLS });
  } catch (error) {
    yield put({ type: ARCHIVE_CALLS_ERROR, error: error });
  }
}

export default function* callSaga() {
  yield all([
    takeEvery(GET_CALLS, getCalls),
    takeEvery(GET_CALL, getCall),
    takeEvery(ARCHIVE_CALL, archiveCall),
    takeEvery(ARCHIVE_CALLS, archiveCalls),
  ]);
}
