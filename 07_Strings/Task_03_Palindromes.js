function solve (input = []) {
  const reversedContainer = []
  for (let word of input) {
    word = word.split(' ').join('')
    const reversed = word.split('').reverse().join('')
    if (word === reversed) reversedContainer.push(word)
  }
  reversedContainer.length
    ? console.log(reversedContainer.join(', '))
    : console.log('No palindromes found')
}

solve(['stella won no wallets',
  'not a palindrome'
])

solve(['stella won wallets',
  'not a palindrome'
])
