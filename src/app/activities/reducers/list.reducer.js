import {
  FETCH_ACTIVITY_LIST,
  FETCH_ACTIVITY_LIST_COMPLETED,
  FETCH_ACTIVITY_LIST_FAILED,
} from '../actions/list.actions';

export const initialState = {
  data: [],
  loading: true,
  loadError: null
};

export const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ACTIVITY_LIST:
      return {
        ...state,
        loading: true,
        loadError: null
      };

    case FETCH_ACTIVITY_LIST_COMPLETED:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };

    case FETCH_ACTIVITY_LIST_FAILED:
      return {
        ...state,
        loading: false,
        loadError: action.payload
      };

    default:
      return state;
  }
};
