const Band = require('../models/Band')

module.exports = {
  getIndex: function (req, res) {
    Band.find({}).then((bands) => {
      return res.render('index', {bands})
    })
  },
  getCreate: function (req, res) {
    return res.render('create')
  },
  postCreate: function (req, res) {
    const name = req.body.name
    const members = req.body.members
    const honorarium = Number(req.body.honorarium)
    const genre = req.body.genre
    Band.create({ name, members, honorarium, genre })
      .then(_ => res.redirect('/'))
      .catch((err) => {
        console.log(err)
        res.redirect('/')
      })

    return res.redirect('/')
  },
  getEdit: function (req, res) {
    const id = req.params.id
    Band.findById(id).then((band) => {
      return res.render('edit', {band})
    })
  },
  postEdit: function (req, res) {
    const id = req.params.id
    const name = req.body.name
    const members = req.body.members
    const honorarium = Number(req.body.honorarium)
    const genre = req.body.genre
    Band.findByIdAndUpdate(id, {name, members, honorarium, genre})
      .then(_ => res.redirect('/'))
      .catch(err => console.log(err))
  },
  getDelete: function (req, res) {
    const id = req.params.id
    Band.findById(id).then((band) => {
      return res.render('delete', {band})
    })
  },
  postDelete: function (req, res) {
    const id = req.params.id
    Band.findByIdAndDelete(id)
      .then(_ => res.redirect('/'))
      .catch(err => console.log(err))
  }
}
