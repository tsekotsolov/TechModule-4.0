function solve (input = []) {
  let bandsTime = {}
  let bandsMembers = {}

  const bandToPrint = input.pop()

  for (const line of input) {
    if (line.startsWith('Play')) {
      let info = line.split('; ')
      const bandName = info[1]
      const playTime = info[2]
      if (!bandsTime.hasOwnProperty(bandName)) {
        bandsTime[bandName] = Number(playTime)
      } else {
        let currentTime = bandsTime[bandName]
        bandsTime[bandName] = currentTime + Number(playTime)
      }
    } else if (line.startsWith('Add')) {
      const info = line.split('; ')
      const bandName = info[1]
      let bandMembers = info[2].split(', ')
      const uniqueMembers = bandMembers.filter((v, i, a) => a.indexOf(v) === i)

      if (!bandsMembers.hasOwnProperty(bandName)) {
        bandsMembers[bandName] = uniqueMembers
      } else {
        let currentMembers = bandsMembers[bandName]
        for (const member of bandMembers) {
          if (!currentMembers.includes(member)) {
            currentMembers.push(member)
          }
        }
      }
    }
  }

  const totalTime = Object.values(bandsTime).reduce((a, b) => a + b)
  console.log(`Total time: ${totalTime}`)

  const sortedBands = Object.keys(bandsTime)
    .sort((a, b) => {
      if (bandsTime[a] !== bandsTime[b]) {
        return bandsTime[b] - bandsTime[a]
      } else {
        return a.localeCompare(b)
      }
    })

  for (const band of sortedBands) {
    console.log(`${band} -> ${bandsTime[band]}`)
  }

  console.log(bandToPrint)
  for (const member of bandsMembers[bandToPrint]) {
    console.log(`=> ${member}`)
  }
}

solve([
  'Play; The Beatles; 2584',
  'Add; The Beatles; John Lennon, Paul McCartney, George Harrison, Ringo Starr',
  'Add; Eagles; Glenn Frey, Don Henley, Bernie Leadon, Randy Meisner',
  'Play; Eagles; 1869',
  'Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards',
  'Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards, Bill Wyman, Charlie Watts, Ian Stewart',
  'Play; The Rolling Stones; 4239',
  'start of concert',
  'The Rolling Stones']
)

// solve([
//   'Add; The Beatles; John Lennon, Paul McCartney',
//   'Add; The Beatles; Paul McCartney, George Harrison',
//   'Add; The Beatles; George Harrison, Ringo Starr',
//   'Play; The Beatles; 3698',
//   'Play; The Beatles; 3828',
//   'start of concert',
//   'The Beatles'
// ])
