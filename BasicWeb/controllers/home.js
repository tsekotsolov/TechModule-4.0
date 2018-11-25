module.exports = {
  indexGet: (req, res) => {
    res.render('home/index')
  },

  indexPost: (req, res) => {
    console.log(req.body)
    res.render('home/index')
  }

}
