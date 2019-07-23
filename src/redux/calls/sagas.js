import { all, call, put, takeEvery } from 'redux-saga/effects';
import { GET_CALLS, GET_CALLS_SUCCESS, GET_CALLS_ERROR } from './actionsTypes.js';

// Get calls
function* getCalls(action) {
  const { getCallsParams } = action;
  try {
    const calls = yield call(callApi, 'GET', '/calls', getCallsParams);
    yield put({ type: GET_CALLS_SUCCESS, calls });
  } catch (error) {
    yield put({ type: GET_CALLS_ERROR, getCallsError: error });
  }
}

export default function* callSaga() {
  yield all([
    takeEvery(GET_CALLS, getCalls),
  ]);
}
