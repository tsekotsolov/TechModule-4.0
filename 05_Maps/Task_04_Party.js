function solve (input = []) {
  const listOfGuests = input.slice(0, input.indexOf('PARTY'))
  const guestsThatCame = input.slice(input.indexOf('PARTY') + 1)

  for (let i = 0; i < guestsThatCame.length; i++) {
    listOfGuests.splice(listOfGuests.indexOf(guestsThatCame[i]), 1)
  }

  console.log(listOfGuests.length)
  let vip = listOfGuests.filter(x => x.match(/^\d/))
  let regular = listOfGuests.filter(x => x.match(/^\D/))
  console.log(vip.join('\n'))
  console.log(regular.join('\n'))
}

solve(['7IK9Yo0h',
  '9NoBUajQ',
  'Ce8vwPmE',
  'SVQXQCbc',
  'tSzE5t0p',
  'PARTY',
  '9NoBUajQ',
  'Ce8vwPmE',
  'SVQXQCbc'
])
