import {
    DETAILS_OPEN,
    DETAILS_CLOSE,
} from './../../constants/types';


const INITIAL_STATE = false

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {

    case DETAILS_OPEN:
      return true

    case DETAILS_CLOSE:
        return false

    default:
      return state;
    }
}
