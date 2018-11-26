const Calculator = require('../model/calculator')

module.exports = {
  indexGet: (req, res) => {
    res.render('home/index')
  },

  indexPost: (req, res) => {
    const leftOperand = Number(req.body.calculator.leftOperand)
    const rightOperand = Number(req.body.calculator.rightOperand)
    const operator = req.body.calculator.operator
    let calculator = new Calculator(leftOperand, operator, rightOperand)
    let result = calculator.calculate()

    res.render('home/index', {calculator: {leftOperand, rightOperand, operator},
      result})
  }

}
