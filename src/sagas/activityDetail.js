import { takeEvery, call, put } from 'redux-saga/effects'
import ACTIONS from '../actions'
import { setActivityDetailAction } from '../actions/activities'
import { fetchActivityDetail } from '../api'

function * handleGetActivityDetail (action) {
  const activity = yield call(fetchActivityDetail, action.id)
  yield put(setActivityDetailAction(activity))
}

export default function * watchGetActivities () {
  yield takeEvery(ACTIONS.GET_ACTIVITY_DETAIL, handleGetActivityDetail)
}
