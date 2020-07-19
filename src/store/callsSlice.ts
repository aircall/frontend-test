import {
  createSlice,
  PayloadAction,
  createEntityAdapter,
} from '@reduxjs/toolkit';
import { Call } from '../@types/call';

const callsAdapter = createEntityAdapter<Call>();

const initialState = callsAdapter.getInitialState({
  status: 'idle',
  error: null,
});

type CallsState = typeof initialState;

export type FetchOneRequestActionType = PayloadAction<string>;

/**
 * createSlice accepts an initial state, an object full of reducer functions, and a "slice name",
 * and automatically generates action creators and action types that correspond to the reducers and state.
 * More info: https://redux-toolkit.js.org/api/createSlice
 */
export const callsSlice = createSlice({
  name: 'calls',
  initialState,
  reducers: {
    fetchListRequest: (state: CallsState) => {
      state.status = 'fetching';
    },
    fetchListSuccess: (state: CallsState, action: PayloadAction<Call[]>) => {
      state.status = 'success';
      callsAdapter.setAll(state, action.payload);
    },
    fetchListFailure: (state: CallsState, action: PayloadAction<string>) => {
      state.status = 'error';
      state.error = action.payload;
    },
    fetchOneRequest: (state, _action: FetchOneRequestActionType) => {
      state.status = 'fetching';
    },
    fetchOneSuccess: (state, action: PayloadAction<Call>) => {
      state.status = 'success';
      callsAdapter.addOne(state, action.payload);
    },
    fetchOneFailure: (state, action: PayloadAction<string>) => {
      state.status = 'error';
      state.error = action.payload;
    },
  },
});

// reducers of calls
export const callsReducer = callsSlice.reducer;

// action creators
export const {
  fetchListRequest,
  fetchListSuccess,
  fetchListFailure,
  fetchOneRequest,
  fetchOneSuccess,
  fetchOneFailure,
} = callsSlice.actions;
