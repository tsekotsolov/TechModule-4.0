const solve = (input) => {
  let energy = 100
  let coins = 100
  const events = input[0].split('|')

  for (let i = 0; i < events.length; i++) {
    const event = events[i].split('-')[0]
    const num = Number(events[i].split('-')[1])

    switch (event) {
      case 'rest':
        const currentEnergy = energy
        energy += num
        if (energy > 100) energy = 100
        console.log(`You gained ${energy - currentEnergy} energy.`)
        console.log(`Current energy: ${energy}.`)
        break

      case 'order':
        if (energy - 30 >= 0) {
          energy -= 30
          coins += num
          console.log(`You earned ${num} coins.`)
        } else {
          console.log('You had to rest!')
          energy += 50
        }
        break

      default:
        if (coins - num > 0) {
          console.log(`You bought ${event}.`)
          coins -= num
        } else {
          console.log(`Closed! Cannot afford ${event}.`)
          return
        }
        break
    }
  }
  console.log(`Day completed!`)

  console.log(`Coins: ${coins}`)

  console.log(`Energy: ${energy}`)
}

// solve('rest-2|order-10|eggs-100|rest-10')
solve(['order-10|order-10|order-10|flour-100|order-100|oven-100|order-1000'])