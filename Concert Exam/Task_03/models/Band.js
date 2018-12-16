const mongoose = require('mongoose')

const bandSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  members: {
    type: String,
    reqired: true
  },
  honorarium: {
    type: Number,
    min: 1,
    reqired: true
  },
  genre: {
    type: String,
    reqired: true,
    enum: ['Rock', 'Metal', 'Pop', 'Other']
  }
})

const Band = mongoose.model('Band', bandSchema)
module.exports = Band
