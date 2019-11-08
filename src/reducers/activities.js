import ACTIONS from '../actions'

const intialState = {
  list: [],
  detail: {}
}

export default (state = intialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_ACTIVITIES:
      return { ...state, list: action.list }

    case ACTIONS.SET_ACTIVITY_DETAIL:
      return { ...state, detail: action.detail }

    default:
      return state
  }
}
