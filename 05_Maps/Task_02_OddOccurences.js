function solve (input = []) {
  input = input.split(' ').map(e => e.toLowerCase())
  let result = new Map()

  for (const word of input) {
    if (result.has(word)) {
      const currentWordOccurences = result.get(word)
      result.set(word, currentWordOccurences + 1)
      continue
    }
    result.set(word, 1)
  }
  result = [...result].filter((a) => a[1] % 2 !== 0).map(e => e[0]).join(' ')
  console.log(result)
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
