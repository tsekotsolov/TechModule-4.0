function division (number) {
  let divisibleBy
  if (number % 10 === 0) {
    divisibleBy = 10
  } else if (number % 7 === 0) {
    divisibleBy = 7
  } else if (number % 6 === 0) {
    divisibleBy = 6
  } else if (number % 3 === 0) {
    divisibleBy = 3
  } else if (number % 2 === 0) {
    divisibleBy = 2
  }

  if (divisibleBy) {
    console.log(`The number is divisible by ${divisibleBy}`)
    return
  }
  console.log('Not divisible')
}

division(12)
