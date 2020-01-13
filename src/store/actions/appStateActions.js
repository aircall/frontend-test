import { ARCHIVE_CALL, LOADING, LOADED_STATE } from '../constants/action-types';

export const loadingState = () => ({ type: LOADING, payload: null });
export const loadedState = (payload) => ({ type: LOADED_STATE, payload });
export const archiveCall = (payload) => ({ type: ARCHIVE_CALL, payload });
