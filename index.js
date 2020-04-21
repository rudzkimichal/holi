
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const db = require('./database/db.js')(app);

app.listen(
  3000,
  () => {
    console.log('Server running at 127.0.0.1:3000/');
    console.log('Press Ctrl + C to quit.');
  }
);
