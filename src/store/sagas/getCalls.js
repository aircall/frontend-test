import { takeLatest, call, put } from 'redux-saga/effects';
import { GET_All_CALLS } from '../constants/actionTypes'

//* function that makes api request and returns a promise for response
function fetchCalls() {
  return fetch('https://aircall-job.herokuapp.com/activities')
    .then(res => res.json())
    .then(res => res)
    .catch(err => err);
}

//* worker saga: makes the api call when watcher saga sees the action.
function* getAllCalls(action) {
  try {
    const response = yield call(fetchCalls);
    const calls = response.message;

    // * Dispatch a success action to the store with the new dog.
    yield put({type: GET_All_CALLS, calls});
  } catch (err) {
    // * Dispatch a failure action to the store with the error
    throw new Error('There was an error');
    // yield put({ type: 'API_CALL_FAILURE', err });
  }
}