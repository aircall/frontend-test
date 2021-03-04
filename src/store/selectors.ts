import { State } from './reducer';
import format from 'date-fns/format';

export function getStatus(state: State) {
  return state.calls.status;
}

export function getError(state: State) {
  return state.calls.error;
}

export function getFeed(state: State) {
  const { ids, entities } = state.calls;
  // Add creation_date property
  const callsWithDate = ids.map((id) => {
    const callById = entities[id];
    return {
      ...callById,
      creation_date: format(new Date(callById.created_at), 'MMMM,dd yyyy'),
    };
  });
  // filter unArchived calls
  const unArchivedCalls = callsWithDate.filter((c) => !c.is_archived);

  // get call's id by date
  let idsByDate: { [key: string]: { ids: string[]; date: string } } = {};
  idsByDate = unArchivedCalls.reduce((acc, cur) => {
    if (acc[cur.creation_date]) {
      acc[cur.creation_date].ids.push(cur.id);
    } else {
      acc[cur.creation_date] = { ids: [cur.id], date: cur.creation_date };
    }
    return acc;
  }, idsByDate);
  return idsByDate;
}

export function getCallById(state: State, id: string) {
  return state.calls.entities[id];
}
