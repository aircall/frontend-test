import React, { createContext, useReducer } from 'react';
import axios from 'axios';

import { initialState, reducer } from '../reducers/activity-reducers';
import { useActions } from '../actions/activity-actions';

export const ActivityContext = createContext(initialState);

function ActivityProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useActions(state, dispatch);

  return (
    <ActivityContext.Provider value={{ state, dispatch, actions }}>
      {children}
    </ActivityContext.Provider>
  );
}

export default ActivityProvider;
