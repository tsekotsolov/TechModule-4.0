function solve (arr = []) {
  arr = arr.map(Number)
  let evenSum = arr.filter((e) => e % 2 === 0).reduce((a, b) => a + b, 0)
  let oddSum = arr.filter((e) => e % 2 !== 0).reduce((a, b) => a + b, 0)

  console.log(evenSum - oddSum)
}

solve([2, 4, 6, 8, 10])
