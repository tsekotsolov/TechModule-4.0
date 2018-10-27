function solve (input = []) {
  let train = input.shift().split(' ').map(Number)
  const maxCapacity = input.shift()

  for (const element of input) {
    if (element.startsWith('Add')) {
      train.push(Number(element.split(' ')[1]))
    } else {
      for (let i = 0; i < train.length; i++) {
        const passengersToFit = Number(element)
        const passengersInWagon = train[i]
        const wagonFreeSeats = maxCapacity - passengersInWagon
        if (passengersToFit <= wagonFreeSeats) {
          train[i] += passengersToFit
          break
        }
      }
    }
  }
  return train.join(' ')
}
solve(['32 54 21 12 4 0 23',
  '75',
  'Add 10',
  'Add 0',
  '30',
  '10',
  '75']
)
