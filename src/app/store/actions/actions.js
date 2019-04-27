import * as ActionTypes from './actions_types.js'

export function fetchCalls() {
  return {
    type: ActionTypes.FETCH_CALLS
  }
}

export function updateCalls() {
  return {
    type: ActionTypes.UPDATE_CALLS
  }
}
