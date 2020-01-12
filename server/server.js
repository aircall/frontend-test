const express = require('express');
const path = require('path');

const { aircallActivities, aircallActivitieByID } = require('./routes/aircall');

const port = (process.env.PORT || 3000);

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/activities/:id', aircallActivitieByID);
app.get('/activities', aircallActivities);

app.get('/ping', (req, res) => res.send('pong'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});



app.listen(port);
