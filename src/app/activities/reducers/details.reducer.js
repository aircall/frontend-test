import {
  FETCH_ACTIVITY_DETAILS,
  FETCH_ACTIVITY_DETAILS_COMPLETED,
  FETCH_ACTIVITY_DETAILS_FAILED,
} from '../actions/details.actions';

export const initialState = {
  data: {},
  loading: true,
  loadError: null
};

export const detailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ACTIVITY_DETAILS:
      return {
        ...state,
        loading: true,
        loadError: null
      };

    case FETCH_ACTIVITY_DETAILS_COMPLETED:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };

    case FETCH_ACTIVITY_DETAILS_FAILED:
      return {
        ...state,
        loading: false,
        loadError: action.payload
      };

    default:
      return state;
  }
};
