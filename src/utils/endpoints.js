export default {
  ACTIVITIES: {
    INDEX: {
      verb: 'GET',
      url: 'https://aircall-job.herokuapp.com/activities'
    },
    SHOW: {
      verb: 'GET',
      url: 'https://aircall-job.herokuapp.com/activities/{activityId}'
    },
    UPDATE: {
      verb: 'POST',
      url: 'https://aircall-job.herokuapp.com/activities/{activityId}'
    }
  }
};
