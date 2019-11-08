import { all, call } from 'redux-saga/effects'
import watchGetActivities from './activities'
import watchGetActivityDetail from './activityDetail'
import watchArchiveActivity from './activityArchive'

export default function * mainSaga () {
  yield all([
    call(watchGetActivities),
    call(watchGetActivityDetail),
    call(watchArchiveActivity)
  ])
}
