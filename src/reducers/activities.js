import { createReducer } from 'reduxsauce';
import dotProp from 'dot-prop-immutable';

import { ActivitiesTypes } from '../actions';

export const INITIAL_STATE = {
  list: []
};

export const setList = (
  state = INITIAL_STATE,
  action
) => {
  return dotProp.set(state, 'list', action.list);
};

export const addItem = (
  state = INITIAL_STATE,
  action
) => {
  const existingIndex = state.list.findIndex(item => item.id === action.item.id);
  return existingIndex > -1 ?
    dotProp.set(state, `list.${existingIndex}`, action.item) :
    dotProp.merge(state, 'list', [action.item]);
};

export const HANDLERS = {
  [ActivitiesTypes.SET_LIST]: setList,
  [ActivitiesTypes.ADD_ITEM]: addItem,
};

export default createReducer(INITIAL_STATE, HANDLERS);
