
const express = require('express');
const mongoose = require('mongoose');
const Item = require('./db.model.js');

const app = express();
const db = mongoose.connect(
  'mongodb+srv://admin:holiproject@books-eicd4.mongodb.net/test?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'books'
  }
).catch(err => console.log(err.reason));

const router = express.Router();

router.route('/books')
  .get((req, resp) => {
    Item.find({'author.lastName': 'Tolkien'}, (err, items) => {
      if(err) return resp.send(err);
      return resp.json(items);
    });
  });

app.use('/api',router);

app.listen(3000, () => {
  console.log(`Server running on port 3000`);
});
