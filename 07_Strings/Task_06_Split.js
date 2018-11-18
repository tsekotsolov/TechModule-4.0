function solve (input) {
  const regex = /([A-Z])/gm
  input = input.split(regex)
  const words = []

  for (let i = 1; i < input.length; i += 2) {
    const word = input[i] + input[i + 1]
    words.push(word)
  }

  console.log(words.join(', '))
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan')
solve('HoldTheDoor')
solve('ThisIsSoAnnoyingToDo')
