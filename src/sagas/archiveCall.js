import { call, put, takeEvery } from 'redux-saga/effects';

import { updateArchivedCall } from '../actions/feed';
import { archiveCall } from '../apis/feedAPI';

export function* postArchiveCall(action) {
  const { callId } = action;
  yield put(updateArchivedCall(callId));
  yield call(archiveCall, callId);
}

export default function* watchArchiveCall() {
  yield takeEvery('ARCHIVE_CALL', postArchiveCall);
}
