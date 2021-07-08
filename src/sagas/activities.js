import { takeEvery, takeLatest, call, put } from 'redux-saga/effects'
import ACTIONS from '../actions'
import { setActivitiesAction, getActivitiesAction } from '../actions/activities'
import { fetchActivities, resetActivitiesArchives } from '../api'

function * handleGetActivities () {
  const activities = yield call(fetchActivities)
  yield put(setActivitiesAction(activities))
}

function * handleResetActivitiesArchives () {
  try {
    const res = yield call(resetActivitiesArchives)

    if (res && res.message === 'done') {
      yield put(getActivitiesAction)
    }
  } catch (error) {
    console.error(error.toString())
  }
}

export default function * watchGetActivities () {
  yield takeEvery(ACTIONS.GET_ACTIVITIES, handleGetActivities)
  yield takeLatest(ACTIONS.RESET_ACTIVITIES_ARCHIVES, handleResetActivitiesArchives)
}
