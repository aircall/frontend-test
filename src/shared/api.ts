import { Call, CallApi, fromApi } from './call.model';

export function getCalls(): Promise<ReadonlyArray<Call>> {
  return fetch('https://aircall-job.herokuapp.com/activities')
    .then((response) => response.ok ? response.json() as Promise<ReadonlyArray<CallApi>> : Promise.reject())
    .then((calls) => calls.map(fromApi))
    .catch(() => [])
  ;
}
