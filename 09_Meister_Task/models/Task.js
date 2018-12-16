const mongoose = require('mongoose')
const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  status: {
    type: String,
    reqired: true,
    enum: ['In Progress', 'Finished', 'Open']
  }

})

const Task = mongoose.model('Tasks', taskSchema)
module.exports = Task
