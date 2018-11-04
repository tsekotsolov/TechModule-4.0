function solve (input = []) {
  const journal = input[0]
  let questsArray = journal.split(', ')
  input.shift()
  input.pop()

  for (let i = 0; i < input.length; i++) {
    const [command, quest] = input[i].split(' - ')

    switch (command) {
      case 'Start':
        if (questsArray.indexOf(quest) < 0) {
          questsArray.push(quest)
        }
        break

      case 'Complete':

        while (questsArray.indexOf(quest) > -1) {
          questsArray.splice(questsArray.indexOf(quest), 1)
        }

        break
      case 'Side Quest':
        const [firstQuest, sideQuest] = quest.split(':')

        while (questsArray.indexOf(firstQuest) !== -1 && questsArray.indexOf(sideQuest) < 0) {
          questsArray.splice(questsArray.indexOf(firstQuest) + 1, 0, sideQuest)
        }
        break

      default:
        if (questsArray.indexOf(quest) !== -1) {
          questsArray.splice(questsArray.indexOf(quest), 1)
          questsArray.push(quest)
        }
        break
    }
  }
  console.log(questsArray.join(', '))
}
// solve([
//   'Hello World, For loop, If else',
//   'Start - While loop',
//   'Complete - For loop',
//   'Retire!'
// ])

solve([
  'Hello World, If else',
  'Complete - Homework',
  'Side Quest - If else:Switch',
  'Renew - Hello World',
  'Retire!'
])
