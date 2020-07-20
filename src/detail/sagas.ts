import { call, put, all, takeEvery } from 'redux-saga/effects';

import {
  ArchiveCallActionType,
  archiveCallReuqest,
  updateArchivedCallById,
} from './action';
import { archiveCall } from '../services/call';

export function* handleArchiveCallRequest({ payload }: ArchiveCallActionType) {
  const { id, onSuccess, onFailure } = payload;
  try {
    yield call(archiveCall, id);
    yield call(onSuccess);
    // dispatch an action to update the archived call in redux state
    yield put(updateArchivedCallById(id));
  } catch (e) {
    yield call(onFailure);
  }
}

export const archiveCallSagas = all([
  takeEvery(archiveCallReuqest.type, handleArchiveCallRequest),
]);
