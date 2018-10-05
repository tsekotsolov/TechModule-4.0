function solve (distance, passengers, price) {
  let neededFuel = distance / 100 * 7
  neededFuel += passengers * 0.1
  let money = neededFuel * price
  console.log(`Needed money for that trip is ${money}lv.
  `)
}
