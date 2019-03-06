import { call, put } from 'redux-saga/effects';
import { UPDATE_CALL_LOG_STATE } from '../actions/actionTypes';

//* function that makes api request and returns a promise for response
function fetchCalls() {
  return fetch('https://aircall-job.herokuapp.com/activities')
    .then(res => res.json())
    .then(res => res)
    .catch(err => err);
}

//* getCallsSaga: makes the api call when watcher saga sees the action.
export function* getCallsSaga(action) {
  try {
    const calls = yield call(fetchCalls);
    // * Dispatch a success action to the store with the calls.
    yield put({type: UPDATE_CALL_LOG_STATE, payload: calls});
  } catch (err) {
    // * Dispatch a failure action to the store with the error
    throw new Error('There was an error');
    // yield put({ type: 'API_CALL_FAILURE', err });
  }
}