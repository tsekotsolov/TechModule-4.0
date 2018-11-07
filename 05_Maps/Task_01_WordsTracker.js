function solve (input = []) {
  let found = new Map()
  let searchedWords = input.shift().split(' ')
  for (const word of searchedWords) {
    found.set(word, 0)
  }

  for (const word of input) {
    if (found.has(word)) {
      const currentCount = found.get(word)
      found.set(word, currentCount + 1)
    }
  }

  const sorted = [...found.entries()].sort((a, b) => {
    return b[1] - a[1]
  })

  for (const kvp of sorted) {
    console.log(`${kvp[0]} - ${kvp[1]}`)
  }
}

solve(['this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the',
  'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task']
)
