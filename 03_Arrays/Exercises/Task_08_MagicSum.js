function solve (input) {
  const arr = input[0].split(' ').map(Number)
  const controlNumber = Number(input[1])

  for (let i = 0; i < arr.length - 1; i++) {
    let currentNumber = arr[i]
    let subArr = arr.slice(i + 1)

    for (let j = 0; j < subArr.length; j++) {
      if (currentNumber + subArr[j] === controlNumber) {
        console.log(`${currentNumber} ${subArr[j]}`)
      }
    }
  }
}
