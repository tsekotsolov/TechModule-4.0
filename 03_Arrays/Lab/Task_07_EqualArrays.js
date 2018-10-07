function solve (firstArr = [], secondArr = []) {
  firstArr = firstArr.map(Number)
  secondArr = secondArr.map(Number)

  let length = firstArr.length >= secondArr.length ? firstArr.length : secondArr.length

  for (let i = 0; i < length; i++) {
    if (firstArr[i] !== secondArr[i]) {
      console.log(`Arrays are not identical. Found difference at ${i} index`)
      return
    }
  }

  let sum = firstArr.reduce((a, b) => a + b)
  console.log(`Arrays are identical. Sum: ${sum}`)
}

solve(['10', '20', '30'], ['10', '20', '30'])

solve(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5'])

solve(['1'], ['10'])
