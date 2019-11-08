const URL = 'https://aircall-job.herokuapp.com/'

export const fetchActivities = async () => fetch(`${URL}activities`).then(response => response.json())

export const fetchActivityDetail = async (id) => fetch(`${URL}activities/${id}`).then(response => response.json())

export const archiveActivity = async (id) => fetch(
  `${URL}activities/${id}`,
  {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      is_archived: true
    })
  }
).then(response => response.json())

export const resetActivitiesArchives = async () => fetch(`${URL}reset`).then(response => response.json())
