import { call, put, takeEvery } from 'redux-saga/effects';

import { getDetail } from '../apis/feedAPI';
import { receiveCallDetails } from '../actions/feed';

export function* fetchDetail(action) {
  const { callId } = action;
  const results = yield call(getDetail, callId);
  yield put(receiveCallDetails(callId, results));
}

export default function* watchFetchDetail() {
  yield takeEvery('FETCH_CALL_DETAILS', fetchDetail);
}
