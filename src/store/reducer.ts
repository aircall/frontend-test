import { combineReducers } from 'redux';
import { callsReducer } from './callsSlice';

export const rootReducer = combineReducers({
  calls: callsReducer,
});

export type State = ReturnType<typeof rootReducer>;
