import * as ActionsTypes from './actions/actions_types.js'

const initialState = {
  calls: [],
  callsFecthing: false,
  selectedFeed: 'active',
  callsToArchive: []
}

export default function app(state = initialState, action) {
  switch (action.type) {
    case ActionsTypes.FETCH_CALLS: {
      return {
        ...state,
        callsFecthing: true
      }
    }
    case ActionsTypes.UPDATE_CALLS: {
      return {
        ...state,
        calls: action.calls,
        callsFecthing: false
      }
    }
    case ActionsTypes.SELECT_FEED: {
      return {
        ...state,
        selectedFeed: action.feed
      }
    }
    case ActionsTypes.ARCHIVE_CALL: {
      return {
        ...state,
        callsToArchive: [...state.callsToArchive, action.callId]
      }
    }
    default:
      return state
  }
}

export const calls = (state) => state.calls
export const archivedCalls = (state) => state.calls.filter(call => call.is_archived)
export const activeCalls = (state) => state.calls.filter(call => !call.is_archived)
export const hasCalls = (state) => state.calls.length !== 0
export const callsFecthing = (state) => state.callsFecthing
export const selectedFeed = (state) => state.selectedFeed
export const callsToArchive = (state) => state.callsToArchive
