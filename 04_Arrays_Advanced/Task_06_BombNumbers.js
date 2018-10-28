const solve = (arr = [], bombData) => {
  const [bombNumber, bombPower] = bombData

  while (arr.includes(bombNumber)) {
    const indexOfBomb = arr.indexOf(bombNumber)
    const indextoStartRemovingFrom = Math.max(0, indexOfBomb - bombPower)
    const itemsToremove = bombPower * 2
    arr.splice(indextoStartRemovingFrom, itemsToremove + 1)
  }

  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  console.log(sum)
}

solve([1, 2, 2, 4, 2, 2, 2, 9],
  [4, 2]
)
solve([1, 4, 4, 2, 8, 9, 1],
  [9, 3])

solve([1, 7, 7, 1, 2, 3],
  [7, 1]
)

solve([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
  [2, 1]
)
