const BASE_URL = 'https://aircall-job.herokuapp.com/';

export function getResource(
  path = '',
  { base = BASE_URL } = {},
) {
  const requestURL = `${base}${path}`;
  const requestData = {
    method: 'GET',
  };

  return fetch(requestURL, requestData)
    .then((res) => res.json());
}

export function postResource(
  path = '',
  { payload, base = BASE_URL } = {},
) {
  const requestURL = `${base}${path}`;
  const requestData = {
    body: JSON.stringify(payload),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  return fetch(requestURL, requestData)
    .then((res) => res.json());
}
