function solve (input) {
  
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
  let ToRepeat = maxSeqObj[timeToRepeat]

  let result = []

  for (let i = 0; i < timeToRepeat; i++) {
    result.push(ToRepeat)
  }

  console.log(result.join(' '))
}

solve(['2 1 1 1 1 1 2 2 3 3 2 2 2 1 4 4 4 4 4 4'])
// solve(['1 1 1 2 3 1 3 3'])
// solve(['4 4 4 4'])
// solve(['0 1 1 5 2 2 6 3 3'])
// solve(['2'])
