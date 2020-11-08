const url = 'https://aircall-job.herokuapp.com/activities';

export const getCallList = () => {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.error('Error fetching call list', error));
};

export const getCallDetail = (id) => {
  return fetch(`${url}/${id}`)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.error('Error fetching call', error));
};

export const updateCall = (id, params) => {
  return fetch(`${url}/${id}`, {
    method: 'post',
    body: JSON.stringify(params),
    headers: {"Content-type": "application/json; charset=UTF-8"}
  }).then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.error('Error updating call', error));
};

export const resetList = () => {
  return fetch('https://aircall-job.herokuapp.com/reset')
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.error('Error fetching call list', error));
};
