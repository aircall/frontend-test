import { all, call } from 'redux-saga/effects'
import watchGetActivities from './activities'
import watchGetActivityDetail from './activityDetail'

export default function * mainSaga () {
  yield all([
    call(watchGetActivities),
    call(watchGetActivityDetail)
  ])
}
