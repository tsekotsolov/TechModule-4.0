function intOrFloat (num1, num2, num3) {
  let sum = [...arguments].reduce((a, b) => a + b)
  sum.toString().includes('.') ? console.log(`${sum} - Float`) : console.log(`${sum} - Integer`)
}

intOrFloat(9, 100, 1.1)
