import { call, put, takeEvery } from 'redux-saga/effects';

import { getDetail } from '../apis/feedAPI';
import { receiveCallDetails } from '../actions/feed';

export function* fetchDetail(callId) {
  const results = yield call(getDetail);
  yield put(receiveCallDetails(callId, results));
}

export default function* watchFetchDetail() {
  yield takeEvery('RECEIVE_CALL_DETAILS', fetchDetail);
}
