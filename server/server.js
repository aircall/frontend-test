const express = require('express');
const path = require('path');

const { aircallActivities, aircallActivitieByID, aircallArchiveActivityByID } = require('./routes/aircall');

const port = (process.env.PORT || 3000);

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/activities/:id', aircallActivitieByID);
app.post('/activities/:id', aircallArchiveActivityByID);
app.get('/activities', aircallActivities);

app.listen(port);
