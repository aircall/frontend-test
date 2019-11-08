import { takeEvery, call, put } from 'redux-saga/effects'
import ACTIONS from '../actions'
import { archiveActivity } from '../api'
import { setActivityDetailAction } from '../actions/activities'

function * handleActivityArchive (action) {
  try {
    const updatedActivity = yield call(archiveActivity, action.id)
    yield put(setActivityDetailAction(updatedActivity))
  } catch (error) {
    console.error(error.toString())
  }
}

export default function * watchArchiveActivity () {
  yield takeEvery(ACTIONS.ARCHIVE_ACTIVITY, handleActivityArchive)
}
