const solve = (firstArr, secondArr) => {
  const [take, del, findMe] = secondArr
  const sliced = firstArr.slice(0, take)
  sliced.splice(0, del)
  const filtered = sliced.filter(el => el === findMe)
  console.log(`Number ${findMe} occurs ${filtered.length} time.`)
}

solve([5, 2, 3, 4, 1, 6],
  [5, 2, 3]
)
