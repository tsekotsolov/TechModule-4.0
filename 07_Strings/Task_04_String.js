function solve (word, text) {
  text = text.toLowerCase().split(' ')
  word = word.toLowerCase()
  if (text.includes(word)) {
    console.log(word)
  } else {
    console.log(`${word} not found!`)
  }
}

solve('java',
  'javascript is the best programming language'
)
solve('python',
  'JavaScript is the best programming language'
)
