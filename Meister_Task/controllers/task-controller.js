const Task = require('../models/Task')
module.exports = {
  getIndex: function (req, res) {
    Task.find({}).then((allTasks) => {
      const openTasks = allTasks.filter(t => t.status === 'Open')
      const inProgressTasks = allTasks.filter(t => t.status === 'In Progress')
      const finishedTasks = allTasks.filter(t => t.status === 'Finished')
      return res.render('index', {openTasks, inProgressTasks, finishedTasks})
    })
  },
  getCreate: function (req, res) {
    return res.render('create')
  },
  postCreate: function (req, res) {
    if (req.body.title && req.body.status) {
      Task.create(req.body)
        .then(() => res.redirect('/'))
        .catch(err => console.log(err))
    }
    return res.redirect('/')
  },
  getEdit: function (req, res) {
    const id = req.params.id
    Task.findById(id).then((task) => {
      switch (task.status) {
        case 'Open':
          task.open = true
          break
        case 'In Progress':
          task.inProgress = true
          break
        default:
          task.finished = true
          break
      }
      return res.render('edit', {task})
    })
  },
  postEdit: function (req, res) {
    const id = req.params.id
    Task.findByIdAndUpdate(id, req.body)
      .then(() => res.redirect('/'))
      .catch(err => console.log(err))
  },
  getDelete: function (req, res) {
    const id = req.params.id
    Task.findById(id).then((task) => {
      switch (task.status) {
        case 'Open':
          task.open = true
          break
        case 'In Progress':
          task.inProgress = true
          break
        default:
          task.finished = true
          break
      }
      return res.render('delete', {task})
    })
  },
  postDelete: function (req, res) {
    const id = req.params.id
    Task.findByIdAndDelete(id)
      .then(() => res.redirect('/'))
      .catch(err => console.log(err))
  }
}
