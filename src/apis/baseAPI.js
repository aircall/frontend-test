const BASE_URL = 'https://aircall-job.herokuapp.com/';

export function getResource(
  path = '',
  { payload, base = BASE_URL } = {},
) {
  const requestURL = `${base}${path}`;
  const requestData = {
    body: payload,
  };

  return fetch(requestURL, requestData)
    .then((res) => res.json());
}
