import { call, put } from 'redux-saga/effects';
import { UPDATE_CALL_LOG_STATE, UPDATE_CALL_DETAILS_STATE } from '../actions/actionTypes';

//* function that makes api request and returns a promise for response
function fetchAllCalls() {
  return fetch('https://aircall-job.herokuapp.com/activities')
    .then(res => res.json())
    .then(res => res)
    .catch(err => err);
}

//* getCallsSaga: makes the api call when watcher saga sees the action.
export function* getCallsSaga() {
  try {
    const calls = yield call(fetchAllCalls);
    // * Dispatch a success action to the store with the calls.
    yield put({type: UPDATE_CALL_LOG_STATE, payload: calls});
  } catch (err) {
    // * Dispatch a failure action to the store with the error
    throw new Error('There was an error');
    // yield put({ type: 'API_CALL_FAILURE', err });
  }
}

function fetchSingleCall() {
  const getParams = window.location.href.split('/');
  const callId = getParams[4];
  return fetch('https://aircall-job.herokuapp.com/activities/' + callId)
    .then(res => res.json())
    .then(res => res)
    .catch(err => console.log(err));
}

//* getCallsSaga: makes the api call when watcher saga sees the action.
export function* getSingleSaga() {
  try {;
    const singleCall = yield call(fetchSingleCall);
    // * Dispatch a success action to the store with the calls.
    yield put({type:  UPDATE_CALL_DETAILS_STATE, payload: singleCall});
  } catch (err) {
    // * Dispatch a failure action to the store with the error
    throw new Error('There was an error', err);
    // yield put({ type: 'API_CALL_FAILURE', err });
  }
}