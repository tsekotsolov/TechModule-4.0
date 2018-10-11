function solve (arr = []) {
  let resultArr = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      resultArr.push(arr[i] + i)
    } else {
      resultArr.push(arr[i] - i)
    }
  }

  console.log(resultArr)
  console.log(arr.reduce((a, b) => a + b))
  console.log(resultArr.reduce((a, b) => a + b))
}
solve([5, 15, 23, 56, 35])
solve([-5, 11, 3, 0, 2])
