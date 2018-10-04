function sumNumbers (number) {
  const numberAsString = number.toString()
  let sum = 0
  for (let i = 0; i < numberAsString.length; i++) {
    sum += numberAsString[i] * 1
  }
  console.log(sum)
}
