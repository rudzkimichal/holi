
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const bodyParser = require('body-parser');
const data = [];

const db = require('./database/db.js');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

db.initServer('books', 'holi');

const server = app.listen(
  3000,
  () => {
    console.log('Server running at 127.0.0.1:3000/');
    console.log('Press Ctrl + C to quit.');
  }
);
