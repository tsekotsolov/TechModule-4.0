function printAndSum (firstNumber, secondNumber) {
  let numbers = []
  for (let i = firstNumber; i <= secondNumber; i++) {
    numbers.push(i)
  }

  let sum = numbers.reduce((a, b) => a + b)

  console.log(numbers.join(' '))
  console.log(`Sum: ${sum}`)
}
printAndSum(0, 26)
