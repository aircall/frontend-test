import { all, call } from 'redux-saga/effects'
import watchGetActivities from './activities'

export default function * mainSaga () {
  yield all([
    call(watchGetActivities)
  ])
}
