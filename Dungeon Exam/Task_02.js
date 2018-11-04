function solve (input = []) {
  let health = 100
  let coins = 0
  const rooms = input[0].split('|')

  for (let i = 0; i < rooms.length; i++) {
    const monstrousItem = rooms[i].split(' ')[0]
    const number = Number(rooms[i].split(' ')[1])
    switch (monstrousItem) {
      case 'potion':
        const currentHealth = health
        health += number
        if (health > 100) {
          health = 100
        }
        console.log(`You healed for ${health - currentHealth} hp.`)
        console.log(`Current health: ${health} hp.`)
        break

      case 'chest':
        coins += number
        console.log(`You found ${number} coins.`)
        break

      default:
        health -= number
        if (health > 0) {
          console.log(`You slayed ${monstrousItem}.`)
        } else {
          console.log(`You died! Killed by ${monstrousItem}.`)
          console.log(`Best room: ${i + 1}`)
          return
        }
        break
    }
  }
  console.log(`You've made it!\nCoins: ${coins}\nHealth: ${health}`)
}
solve(['rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000'])
// solve(['cat 10|potion 30|orc 10|chest 10|snake 25|chest 110'])
