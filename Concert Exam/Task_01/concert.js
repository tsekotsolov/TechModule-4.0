function solve (input = []) {
  let bandsPerformanceDuration = {}
  let bandsMembers = {}

  const bandToPrint = input.pop()

  for (const line of input) {
    const info = line.split('; ')
    const bandName = info[1]
    if (line.startsWith('Play')) {
      const duration = info[2]
      if (!bandsPerformanceDuration.hasOwnProperty(bandName)) {
        bandsPerformanceDuration[bandName] = 0
      }
      const currentTime = bandsPerformanceDuration[bandName]
      bandsPerformanceDuration[bandName] = currentTime + Number(duration)
    } else if (line.startsWith('Add')) {
      const bandMembers = info[2].split(', ').filter((v, i, a) => a.indexOf(v) === i)

      if (!bandsMembers.hasOwnProperty(bandName)) {
        bandsMembers[bandName] = []
      }
      const currentMembers = bandsMembers[bandName]
      for (const member of bandMembers) {
        if (!currentMembers.includes(member)) {
          currentMembers.push(member)
        }
      }
    }
  }

  const totalDuration = Object.values(bandsPerformanceDuration).reduce((a, b) => a + b)
  console.log(`Total time: ${totalDuration}`)

  const sortedBands = Object.keys(bandsPerformanceDuration)
    .sort((a, b) => {
      if (bandsPerformanceDuration[a] !== bandsPerformanceDuration[b]) {
        return bandsPerformanceDuration[b] - bandsPerformanceDuration[a]
      }
      return a.localeCompare(b)
    })

  for (const band of sortedBands) {
    console.log(`${band} -> ${bandsPerformanceDuration[band]}`)
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

solve([
  'Add; The Beatles; John Lennon, Paul McCartney',
  'Add; The Beatles; Paul McCartney, George Harrison',
  'Add; The Beatles; George Harrison, Ringo Starr',
  'Play; The Beatles; 3698',
  'Play; The Beatles; 3828',
  'start of concert',
  'The Beatles'
])
