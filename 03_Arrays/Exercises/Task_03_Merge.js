function solve (firstArr, secondArr) {
  let result = []
  for (let i = 0; i < firstArr.length; i++) {
    if (i % 2 === 0) {
      result.push(firstArr[i] * 1 + secondArr[i] * 1)
    } else {
      result.push(firstArr[i] + secondArr[i])
    }
  }

  console.log(result.join(' - '))
}

solve(['5', '15', '23', '56', '35'],
  ['17', '22', '87', '36', '11'] )

