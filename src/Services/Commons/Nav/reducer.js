import { CURRENT_NAV_IS_ALL, CURRENT_NAV_IS_INBOX } from './../../../constants/types'

const INITIAL_STATE = 'all'
export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case CURRENT_NAV_IS_ALL:
      return 'all'

    case CURRENT_NAV_IS_INBOX:
      return 'inbox'

    default:
      return state
  }
}
