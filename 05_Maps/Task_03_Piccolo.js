function solve (input = []) {
  const cars = []

  for (const car of input) {
    const [ direction, number ] = car.split(', ')
    switch (direction) {
      case 'IN':
        if (!cars.includes(number)) {
          cars.push(number)
        }
        break

      default:
        if (cars.includes(number)) {
          cars.splice(cars.indexOf(number), 1)
        }
        break
    }
  }
  if (cars.length === 0) {
    console.log('Parking Lot is Empty')
    return
  }
  console.log(cars.sort((a, b) => a.localeCompare(b)).join(' \n'))
}

solve([
  'IN, CA2844AA',
  'IN, CA1234TA',
  'OUT, CA2844AA',
  'IN, CA9999TT',
  'IN, CA2866HI',
  'OUT, CA1234TA',
  'IN, CA2844AA',
  'OUT, CA2866HI',
  'IN, CA9876HH',
  'IN, CA2822UU'
])

solve([ 'IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'OUT, CA1234TA' ])
