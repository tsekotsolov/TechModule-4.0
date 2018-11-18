function solve (words, sentance) {
  words = words.split(', ')
  for (const word of words) {
    sentance = sentance.replace('*'.repeat(word.length), word)
  }
  console.log(sentance)
}

solve('great', 'softuni is ***** place for learning new programming languages')

solve('great, learning', 'softuni is ***** place for ******** new programming languages')
