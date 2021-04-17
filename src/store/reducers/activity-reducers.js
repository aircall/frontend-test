const initialState = {
  activities: [],
  details: {},
  loading: false,
  error: false,
};

const types = {
  GET_ACTIVITIES_SUCCESS: 'GET_ACTIVITIES_SUCCESS',
  GET_ACTIVITIES_ERROR: 'GET_ACTIVITIES_ERROR',
  GET_DETAILS_SUCCESS: 'GET_DETAILS_SUCCESS',
  GET_DETAILS_ERROR: 'GET_DETAILS_ERROR',
  LOADING_START: 'LOADING_START',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ACTIVITIES_SUCCESS:
      return {
        ...state,
        activities: action.payload,
        loading: false,
        error: false,
      };
    case types.GET_ACTIVITIES_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };
    case types.GET_DETAILS_SUCCESS:
      return {
        ...state,
        details: action.payload,
        loading: false,
        error: false,
      };
    case types.GET_DETAILS_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case types.LOADING_START:
      return {
        ...state,
        loading: true,
        error: false,
      };
    default:
      state;
  }
};

export { initialState, types, reducer };
