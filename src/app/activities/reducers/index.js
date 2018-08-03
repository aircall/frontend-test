import { combineReducers } from 'redux'

import { listReducer as list } from './list.reducer';
import { detailsReducer as details } from './details.reducer';

export const activitiesReducer = combineReducers({ list, details });
