const solve = (input = []) => {
  const guests = []
  for (const info of input) {
    const guest = info.split(' ')[0]
    if (!info.includes('not') && !guests.includes(guest)) {
      guests.push(guest)
    } else if (info.includes('not') && !guests.includes(guest)) {
      console.log(`${guest} is not in the list!`)
    } else if (info.includes('not') && guests.includes(guest)) {
      const index = guests.indexOf(guest)
      guests.splice(index, 1)
    } else {
      console.log(`${guest} is already in the list!`)
    }
  }

  console.log(guests.join('\n'))
}
