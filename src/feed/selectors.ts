import { State } from '../store/reducer';
import format from 'date-fns/format';

export function getStatus(state: State) {
  return state.calls.status;
}

export function getError(state: State) {
  return state.calls.error;
}

export function getFeed(state: State) {
  const { ids, entities } = state.calls;
  const callsWithDate = ids.map((id) => {
    const callById = entities[id];
    return {
      ...callById,
      creation_date: format(new Date(callById.created_at), 'MMMM,dd yyyy'),
    };
  });
  let idsByDate: { [key: string]: { ids: string[]; date: string } } = {};
  idsByDate = callsWithDate.reduce((acc, cur) => {
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
