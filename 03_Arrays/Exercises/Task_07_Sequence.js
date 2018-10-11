function solve (input) {
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

  console.log(countArr)

  let index = countArr.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0)
  console.log(arr[index].toString().repeat(countArr[index]).split('').join(' '))
}

// solve(['2 1 1 1 1 1 2 2 3 3 2 2 2 1 4 4 4 4 4 4'])
 solve(['1 1 1 2 3 1 3 3'])
// solve(['4 4 4 4'])
// solve(['0 1 1 5 2 2 6 3 3'])
// solve(['2'])
