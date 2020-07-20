import { createAction } from '@reduxjs/toolkit';

/**
 * Action creator to archive a call
 * Example of created action
 * {
 *   type: 'calls/archive',
 *   payload: {
 *     id: '1234',
 *     onSuccess: ()=>{ console.log('Archived') },
 *     onFailure: ()=>{ console.log('Error')},
 *   }
 * }
 */
export const archiveCallReuqest = createAction('calls/archiveOneRequest', function prepare(
  id: string,
  onSuccess: () => void,
  onFailure: () => void,
) {
  return {
    payload: {
      id,
      onSuccess,
      onFailure,
    },
  };
});
export type ArchiveCallActionType = ReturnType<typeof archiveCallReuqest>;

export const updateArchivedCallById = createAction<string>('calls/archiveOneSuccess');
