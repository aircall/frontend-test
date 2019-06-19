import { Call, CallApi, fromApi } from './call.model';

export function getCalls(): Promise<ReadonlyArray<Call>> {
  return fetch('https://aircall-job.herokuapp.com/activities')
    .then((response) => response.ok ? response.json() as Promise<ReadonlyArray<CallApi>> : Promise.reject())
    .then((calls) => calls.map(fromApi))
    .catch(() => [])
  ;
}

export function archiveCall(id: number): Promise<undefined> {
  return fetch(
    `https://aircall-job.herokuapp.com/activities/${id}`,
    {
      method: 'POST',
      body: JSON.stringify({ is_archived: true }),
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )
    .then((response) => response.ok ? Promise.resolve() : Promise.reject())
    .then(() => undefined)
  ;
}

export function resetArchivedStatus(): Promise<ReadonlyArray<Call>> {
  return fetch('https://aircall-job.herokuapp.com/reset')
    .then((response) => response.ok ? Promise.resolve() : Promise.reject())
    .then(() => undefined)
  ;
}
