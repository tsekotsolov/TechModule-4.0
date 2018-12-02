const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    reqired: true
  },
  price: {
    type: Number,
    min: 1,
    reqired: true
  }
})

const Book = mongoose.model('Book', bookSchema)
module.exports = Book
