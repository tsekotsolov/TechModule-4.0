function solve (arr = []) {
  let index
  let indexExsits = false

  for (let i = 0; i < arr.length; i++) {
    let leftSum = 0
    let rightSum = 0

    leftSum = arr.slice(0, i).reduce((a, b) => a + b, 0)
    rightSum = arr.slice(i + 1).reduce((a, b) => a + b, 0)

    if (rightSum === leftSum) {
      index = i
      indexExsits = true
    }
  }

  if (indexExsits) {
    console.log(index)
    return
  }
  console.log('no')
}
// solve([1, 2, 3, 3])
// solve([1, 2])
// solve([1])
// solve([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])
// solve([1,2,3])
