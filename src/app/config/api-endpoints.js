const baseURL = 'https://aircall-job.herokuapp.com'

export const endpoints = {
  activityList: {
    type: 'get',
    url: `${baseURL}/activities`,
  },
  activityDetails: {
    type: 'get',
    url: `${baseURL}/activities/{{activityID}}`
  }
}
