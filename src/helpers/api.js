const API = 'https://aircall-job.herokuapp.com/'

export const get = async (url) => fetch(`${API}${url}`).then(response => response.json())

export const post = (url, body) => {
  return fetch(
    `${API}${url}`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body
    }
  ).then(response => response.json())
}
