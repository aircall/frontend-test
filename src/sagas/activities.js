import { takeEvery } from 'redux-saga/effects'
import ACTIONS from '../actions'

function * handleGetActivities () {
  console.log('handleGetActivities')
}

export default function * watchGetActivities () {
  yield takeEvery(ACTIONS.GET_ACTIVITIES, handleGetActivities)
}
