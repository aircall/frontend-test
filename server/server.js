const express = require('express');
const path = require('path');

const { aircallActivities, aircallActivitieByID } = require('./routes/aircall');

const app = express();
app.use(express.static(path.join(__dirname, 'build')));

app.get('/activities/:id', aircallActivitieByID);
app.get('/activities', aircallActivities);

app.get('/ping', (req, res) => res.send('pong'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 3002);
