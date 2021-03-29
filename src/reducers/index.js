import {ARCHIVE_CALL, FETCH_ACTIVITY_DETAIL, FETCH_ACTIVITIES} from "../actions/types";
import {combineReducers} from 'redux';

const activitiesReducer = (state=[], action) => {
    switch (action.type) {
        case FETCH_ACTIVITIES:
            return [...action.payload];
        case ARCHIVE_CALL:
            // Removed archived call from state
            return [...state.filter(element => element.id!==action.payload)];
        default:
            return state;
    }
}

const activityReducer = (state={}, action) => {
    switch (action.type) {
        case FETCH_ACTIVITY_DETAIL:
            return {...action.payload};
        default:
            return state;
    }
}

const reducers = combineReducers({activity: activityReducer, activities: activitiesReducer});

export default reducers;