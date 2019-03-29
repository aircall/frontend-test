import {
    IS_LOADING,
    IS_LOADED,
} from './../../../constants/types';


const INITIAL_STATE = false
export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {

    case IS_LOADING:
      return true

    case IS_LOADED:
        return false


    default:
      return state;
    }
}
