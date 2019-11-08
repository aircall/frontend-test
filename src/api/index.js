const URL = 'https://aircall-job.herokuapp.com/'

export const fetchActivities = async () => fetch(`${URL}/activities`).then(response => response.json())
