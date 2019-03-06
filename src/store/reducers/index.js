import { combineReducers } from 'redux';
import callLogReducer from './callLogReducer';
import callDetailReducer from './callDetailReducer';

export default combineReducers({
  callLogReducer,
  callDetailReducer
});