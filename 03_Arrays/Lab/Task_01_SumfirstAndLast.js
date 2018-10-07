function sumFirstAndLast (arr) {
  let newArr = []
  newArr.push(arr[0])
  newArr.push(arr[arr.length - 1])
  console.log(newArr.map(Number).reduce((a, b) => a + b))
}

sumFirstAndLast(['20', '30', '40'])
