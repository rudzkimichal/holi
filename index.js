
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

const db = mongoose.connect(
  'mongodb+srv://admin:holiproject@books-eicd4.mongodb.net/test?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    dbName: 'books'
  }
).catch(err => console.log(err.reason));
