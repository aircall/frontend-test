import * as Actions from './actions/actions.js'

const initialState = {
  calls: [0, 1, 2, 3, 4, 5],
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
export const hasCalls = (state) => state.calls.length !== 0
