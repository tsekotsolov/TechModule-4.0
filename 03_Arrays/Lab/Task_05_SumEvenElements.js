function solve (arr = []) {
  return arr.map(Number).filter((e) => e % 2 === 0).reduce((a, b) => a + b, 0)
}
