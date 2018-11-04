function solve (input = []) {
  let companions = input[0]
  const daysOfAdventure = input[1]
  let coins = 0

  for (let i = 1; i <= daysOfAdventure; i++) {
    coins += 50
    if (i % 10 === 0) {
      companions -= 2
    }
    if (i % 15 === 0) {
      companions += 5
    }

    coins -= companions * 2

    if (i % 3 === 0) {
      coins -= companions * 3
    }

    if (i % 5 === 0) {
      coins += companions * 20
      if (i % 3 === 0) {
        coins -= companions * 2
      }
    }
  }

  console.log(`${companions} companions received ${Math.floor(coins / companions)} coins each.`)
}

solve([15, 30])
