function daysOfWeek (number) {
  let days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ]
  if (days[number - 1]) {
    console.log(days[number - 1])
    return
  }
  console.log('Invalid day!')
}
daysOfWeek(4)
