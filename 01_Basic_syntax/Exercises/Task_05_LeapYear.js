function leapYear (year) {
  let isLeap = false

  if (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)) {
    isLeap = true
  }

  isLeap ? console.log('yes') : console.log('no')
}

leapYear(1984)
