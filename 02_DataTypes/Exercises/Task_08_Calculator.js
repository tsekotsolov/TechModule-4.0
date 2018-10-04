function calculator (firstNumber, operator, secondNumber) {
  console.log(eval(Object.values(arguments).join('')).toFixed(2))
}

calculator(3, '*', 4)
