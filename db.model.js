
const mongoose = require('mongoose');

const bookModel = new mongoose.Schema(
  {
    publishedBy: String,
    author: {
      firstName: String,
      lastName: String
    },
    title: String,
    vol: String,
    comments: String,
    location: String,
    isbn: String,
    yearPublished: String,
    imageUrl: String,
    desc: String
  },
  {
    collection: 'holi'
  }
);

module.exports = mongoose.model('Item', bookModel);
