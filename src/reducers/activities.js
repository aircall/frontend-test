import ACTIONS from '../actions'

const intialState = {
  list: [],
  detail: {}
}

export default (state = intialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_ACTIVITIES:
      return { ...state, list: action.list }

    default:
      return state
  }
}
