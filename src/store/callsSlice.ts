import {
  createSlice,
  PayloadAction,
  createEntityAdapter,
  EntityState,
} from '@reduxjs/toolkit';
import { Call } from '../@types/call';
import { updateArchivedCallById } from '../detail/action';

const callsAdapter = createEntityAdapter<Call>();

export enum FETCH_STATUS {
  IDLE = 'idle',
  FETCHING = 'fetching',
  SUCCESS = 'success',
  ERROR = 'error',
}

type CallsState = EntityState<Call> & {
  status: FETCH_STATUS;
  error: null | string;
};

const initialState: CallsState = callsAdapter.getInitialState({
  status: FETCH_STATUS.IDLE,
  error: null,
});

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
      state.status = FETCH_STATUS.FETCHING;
    },
    fetchListSuccess: (state: CallsState, action: PayloadAction<Call[]>) => {
      state.status = FETCH_STATUS.SUCCESS;
      callsAdapter.setAll(state, action.payload);
    },
    fetchListFailure: (state: CallsState, action: PayloadAction<string>) => {
      state.status = FETCH_STATUS.ERROR;
      state.error = action.payload;
    },
    fetchOneRequest: (state, _action: FetchOneRequestActionType) => {
      state.status = FETCH_STATUS.FETCHING;
    },
    fetchOneSuccess: (state, action: PayloadAction<Call>) => {
      state.status = FETCH_STATUS.SUCCESS;
      callsAdapter.addOne(state, action.payload);
    },
    fetchOneFailure: (state, action: PayloadAction<string>) => {
      state.status = FETCH_STATUS.ERROR;
      state.error = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder.addCase(updateArchivedCallById, (state, action) => {
      const id = action.payload;
      callsAdapter.updateOne(state, { id, changes: { is_archived: true } });
    }),
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
