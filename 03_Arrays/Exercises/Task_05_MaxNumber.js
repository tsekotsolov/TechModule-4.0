function solve (arr = []) {
  let result = []
  for (let i = 0; i < arr.length - 1; i++) {
    let isBigger = false
    let rightArr = arr.slice(i + 1)

    console.log(rightArr)

    for (let j = 0; j < rightArr.length; j++) {
      if (arr[i] > rightArr[j]) {
        isBigger = true
      } else {
        isBigger = false
        break
      }
    }

    if (isBigger) {
      result.push(arr[i])
    }
  }

  result.push(arr.pop())
  console.log(result.join(' '))
}

solve([1, 4, 3, 2])
