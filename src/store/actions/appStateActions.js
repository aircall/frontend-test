import { ARCHIVE_CALL, CLOSE_DETAIL, LOADING, LOADED_STATE, OPEN_DETAIL } from '../constants/action-types';

export const archiveCall = (payload) => ({ type: ARCHIVE_CALL, payload });
export const closeDetail = () => ({ type: CLOSE_DETAIL, payload: null });
export const loadingState = () => ({ type: LOADING, payload: null });
export const loadedState = (payload) => ({ type: LOADED_STATE, payload });
export const openDetail = (payload) => ({ type: OPEN_DETAIL, payload });
