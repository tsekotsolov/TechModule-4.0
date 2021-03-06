function solve (input = []) {
  const [flightDestination, flightStatus, flag] = input
  const flights = {}

  for (const flightData of flightDestination) {
    const [num, destination] = flightData.split(' ')
    flights[num] = { Destination: destination, Status: 'Ready to fly' }
  }

  for (const flightData of flightStatus) {
    const [num, status] = flightData.split(' ')
    if (flights.hasOwnProperty(num)) {
      flights[num].Status = status
    }
  }

  for (const key in flights) {
    if (flights[key].Status === flag[0]) {
      console.log(flights[key])
    }
  }
}
solve([['WN269 Delaware',
  'FL2269 Oregon',
  'WN498 Las Vegas',
  'WN3145 Ohio',
  'WN612 Alabama',
  'WN4010 New York',
  'WN1173 California',
  'DL2120 Texas',
  'KL5744 Illinois',
  'WN678 Pennsylvania'],
['DL2120 Cancelled',
  'WN612 Cancelled',
  'WN1173 Cancelled',
  'SK330 Cancelled'],
['Ready to fly']
]
)
