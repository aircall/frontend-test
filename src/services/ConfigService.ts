export const ConfigService = {
  url: process.env.REACT_APP_BASE_URL || 'https://aircall-job.herokuapp.com',
  port: process.env.PORT || 3001,
  authToken: 'kosmos-jwt-token'
}
