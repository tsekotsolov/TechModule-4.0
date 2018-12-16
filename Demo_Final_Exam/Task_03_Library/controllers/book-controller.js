const Book = require('../models/Book')

module.exports = {
  getIndex: (req, res) => {
    Book.find({})
      .then(books => res.render('index', {books}))
  },
  getCreate: (req, res) => {
    res.render('create')
  },
  postCreate: (req, res) => {
    const title = req.body.title
    const author = req.body.author
    const price = Number(req.body.price)
    Book.create({title, author, price})
      .then(_ => res.redirect('/'))
      .catch((err) => {
        console.log(err)
        res.redirect('/')
      })
  },
  getEdit: (req, res) => {
    const id = req.params.id
    Book.findById(id)
      .then(book => res.render('edit', {book}))
  },
  postEdit: (req, res) => {
    const id = req.params.id
    const title = req.body.title
    const author = req.body.author
    const price = Number(req.body.price)
    Book.findByIdAndUpdate(id, {title, author, price})
      .then(_ => res.redirect('/'))
      .catch(err => console.log(err))
  },
  getDelete: (req, res) => {
    const id = req.params.id
    Book.findById(id)
      .then(book => res.render('delete', {book}))
      .catch(err => console.log(err))
  },
  postDelete: (req, res) => {
    const id = req.params.id
    Book.findByIdAndDelete(id)
      .then(_ => res.redirect('/'))
      .catch(err => console.log(err))
  }
}
