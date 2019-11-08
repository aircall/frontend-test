import { takeEvery, call, put } from 'redux-saga/effects'
import ACTIONS from '../actions'
import { setActivitiesAction } from '../actions/activities'
import { fetchActivities } from '../api'

function * handleGetActivities () {
  const activities = yield call(fetchActivities)
  yield put(setActivitiesAction(activities))
}

export default function * watchGetActivities () {
  yield takeEvery(ACTIONS.GET_ACTIVITIES, handleGetActivities)
}
