const solve = (input = []) => {
  input.sort((a, b) => a < b)
  const result = []
  for (let i = 0; i < input.length / 2; i++) {
    result.push(input[i])
    result.push(input[input.length - 1 - i])
  }
  if (input.length % 2 !== 0) {
    result.pop()
  }
  console.log(result.join(' '))
}

solve([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])
