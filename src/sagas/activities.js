import { takeEvery, call, put } from 'redux-saga/effects'
import ACTIONS from '../actions'
import { setActivities } from '../actions/activities'
import { fetchActivities } from '../api'

function * handleGetActivities () {
  const activities = yield call(fetchActivities)
  yield put(setActivities(activities))
}

export default function * watchGetActivities () {
  yield takeEvery(ACTIONS.GET_ACTIVITIES, handleGetActivities)
}
