import { combineReducers } from 'redux';
import activityReducer from './modules/Activity/reducer';

export default combineReducers({
    activity: activityReducer,
});


