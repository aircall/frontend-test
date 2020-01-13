
const request = require('request');

const AIRCALL_ACTIVITIES_URL = 'https://aircall-job.herokuapp.com/activities';

/* eslint-disable func-names */
exports.aircallActivities = function (req, res) {
  request(AIRCALL_ACTIVITIES_URL, (err, data) => {
    res.send(JSON.parse(data.body));
  });
};

/* It looks like the server has a fixed number of calls
 that do not update, in which case this call is unnecessary
 generally.
*/
exports.aircallActivitieByID = function (req, res) {
  request(`${AIRCALL_ACTIVITIES_URL}/${req.params.id}`, (err, data) => {
    res.send(JSON.parse(data.body));
  });
};

exports.aircallResetAllCalls = function (req, res) {
  request(`${AIRCALL_ACTIVITIES_URL}/reset`, (err, data) => {
    res.send(JSON.parse(data.body));
  });
};

exports.aircallArchiveActivityByID = function (req, res) {
  request(`${AIRCALL_ACTIVITIES_URL}/${req.params.id}`, (err, data) => {
    res.send(JSON.parse(data.body));
  });
};

/* eslint-enable func-names */
