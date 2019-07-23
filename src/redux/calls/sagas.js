import { all, call, put, takeEvery } from 'redux-saga/effects';
import { 
  GET_CALLS, GET_CALLS_SUCCESS, GET_CALLS_ERROR,
  GET_CALL, GET_CALL_SUCCESS, GET_CALL_ERROR
} from './actionsTypes.js';
import { callApi } from '../../utils/api.js'

// Get calls
function* getCalls(action) {
  const { getCallsParams } = action;
  try {
    const calls = yield call(callApi, 'GET', '/activities', getCallsParams);
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
