export default class API {
  constructor() {}
  getActivities() {
    return fetch("https://aircall-job.herokuapp.com/activities")
      .then(res => res.json())
      .catch(err => ({ error: "Activities not found." }));
  }
  getDetails(id) {
    return fetch(`https://aircall-job.herokuapp.com/activities/${id}`)
      .then(res => res.json())
      .catch(err => ({ error: "Details not found." }));
  }
  archiveCall(id) {}
}
