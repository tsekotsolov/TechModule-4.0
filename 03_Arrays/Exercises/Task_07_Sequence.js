function solve1 (input) {

  let arr = input[0].split(' ').map(Number)
  let counter = 1
  let arrResult = []

  for (let i = 0; i < arr.length; i++) {
    let countObj = {}
    if (arr[i] === arr[i - 1]) {
      counter++
    } else {
      counter = 1
    }
    countObj[counter] = arr[i]
    arrResult.push(countObj)
  }

  let maxSeqObj = arrResult.sort((a, b) => {
    return Object.keys(b)[0] - Object.keys(a)[0]
  }).shift()

  let timeToRepeat = (Object.keys(maxSeqObj)[0])
  let valueToRepeat = maxSeqObj[timeToRepeat]

  let result = []

  for (let i = 0; i < timeToRepeat; i++) {
    result.push(valueToRepeat)
  }
  console.log(result.join(' '))
}

function solve2 (input) {
  let arr = input[0].split(' ').map(Number)

  let counter = 1
  let countArr = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      counter++
    } else {
      counter = 1
    }
    countArr.push(counter)
  }

  let index = countArr.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0)

  let valueToRepeat = arr[index]
  let timeToRepeat = countArr[index]

  let result = []

  for (let i = 0; i < timeToRepeat; i++) {
    result.push(valueToRepeat)
  }

  console.log(result.join(' '))
}
