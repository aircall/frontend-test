import { call, put, all, takeLatest } from 'redux-saga/effects';
import { fetchCalls, fetchCall } from '../services/call';
import {
  fetchListSuccess,
  fetchListFailure,
  fetchListRequest,
  fetchOneRequest,
  FetchOneRequestActionType,
  fetchOneSuccess,
  fetchOneFailure,
} from './callsSlice';

export function* handleFetchListRequest() {
  try {
    const res = yield call(fetchCalls);
    yield put(fetchListSuccess(res));
  } catch (e) {
    yield put(fetchListFailure(e.message));
  }
}

export function* handleFetchOneRequest({ payload }: FetchOneRequestActionType) {
  try {
    const res = yield call(fetchCall, payload);
    yield put(fetchOneSuccess(res));
  } catch (e) {
    yield put(fetchOneFailure(e.message));
  }
}

export const callsSagas = all([
  takeLatest(fetchListRequest.type, handleFetchListRequest),
  takeLatest(fetchOneRequest.type, handleFetchOneRequest),
]);
