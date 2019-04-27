import * as Actions from './actions/actions_types.js'

const initialState = {
  calls: [],
  callsFecthing: false
}

export default function app(state = initialState, action) {
  switch (action.type) {
    case Actions.FETCH_CALLS: {
      return {
        ...state,
        callsFecthing: true
      }
    }
    case Actions.UPDATE_CALLS: {
      return {
        ...state,
        calls: action.calls
      }
    }
    default:
      return state
  }
}

export const calls = (state) => state.calls
export const archivedCalls = (state) => state.calls.filter(call => call.is_archived)
export const hasCalls = (state) => state.calls.length !== 0
export const callsFecthing = (state) => state.callsFecthing
