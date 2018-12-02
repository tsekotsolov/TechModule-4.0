const solve = (batches = []) => {
  const breads = []
  batches.pop()
  for (const bread of batches) {
    breads.push(bread.split('#').map(Number))
  }

  const sortingFunc = (a, b) => {
    const aSum = a.reduce((x, y) => x + y)
    const bSum = b.reduce((x, y) => x + y)
    const aAverage = aSum / a.length
    const bAverage = bSum / b.length

    if (aSum !== bSum) {
      return bSum - aSum
    }
    if (aAverage !== bAverage) {
      return bAverage - aAverage
    }
    return a.length - b.length
  }

  breads.sort((a, b) => sortingFunc(a, b))

  console.log(`Best Batch quality: ${breads[0].reduce((a, b) => a + b)}`)
  console.log(breads[0].join(' '))
}

// solve(['5#4#10#-2',
//   '10#5#2#3#2',
//   'Bake It!'
// ])

solve(['5#3#2',
  '10#2#-2#1#-1',
  '4#2#1',
  'Bake It!']
)
