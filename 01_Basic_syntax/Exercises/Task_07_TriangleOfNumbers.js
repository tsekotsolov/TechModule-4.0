function triangleOfNumbers (n) {
  let result = ''

  for (let i = 0; i <= n; i++) {
    result += (`${i} `.repeat(i))
    result += '\n'
  }
  return result
}

console.log(triangleOfNumbers(5))
