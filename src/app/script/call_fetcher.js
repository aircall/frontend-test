const CALLS_LIST_ENDPOINT = 'https://aircall-job.herokuapp.com/activities'

export function fetchCalls() {
  return fetch(CALLS_LIST_ENDPOINT)
    .then(function(response) {
      return response.json();
    })
    .catch(err => console.error(err))
}
