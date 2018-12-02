function solve (input) {
  const dict = input[0].split(' | ')
  const controlWords = input[1].split(' | ')
  const command = input[2]

  const dictionary = {}

  for (const line of dict) {
    const [word, definition] = line.split(': ')
    if (dictionary.hasOwnProperty(word)) {
      const currentDefinitions = dictionary[word]
      currentDefinitions.push(definition)
    } else {
      dictionary[word] = [definition]
    }
  }
  for (const word in dictionary) {
    const sorted = dictionary[word].sort((a, b) => b.length - a.length)
    dictionary[word] = sorted
  }
  for (const word of controlWords) {
    if (dictionary.hasOwnProperty(word)) {
      console.log(word)
      for (const description of dictionary[word]) {
        console.log(` -${description}`)
      }
    }
  }
  if (command === 'List') {
    const words = Object.keys(dictionary).sort((a, b) => a.localeCompare(b))
    console.log(words.join(' '))
  }
}

solve(
  ['programmer: an animal, which turns coffee into code | developer: a magician',
    'Pesho | Gosho',
    'List']
)

// solve(['tackle: the equipment required for a task or sport | code: write code for a computer program | bit: a small piece, part, or quantity of something | tackle: make determined efforts to deal with a problem | bit: a short time or distance',
//   'bit | code | tackle',
//   'End'])
