function solve(input = []) {
  const power = {
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    '10': 10,
    'A': 14,
    'J': 11,
    'Q': 12,
    'K': 13
  }
  const types = {
    'S': 4,
    'H': 3,
    'D': 2,
    'C': 1
  }
  let playersAndScores = new Map()
  for (let line of input) {
    line = line.split(': ')
    const player = line[0]
    const cards = [...new Set(line[1].split(', '))]

    if (playersAndScores.has(player)) {
      let currentScore = playersAndScores.get(player)
      playersAndScores.set(player, [...new Set([...currentScore, ...cards])])
    } else {
      playersAndScores.set(player, cards)
    }
  }

  let result = {}

  for (const entry of [...playersAndScores]) {
    let cards = entry[1]
    let value = 0
    for (const card of cards) {
      let currentPower = power[card.substring(0, card.length - 1)]
      let currentType = types[card.substring(card.length - 1)]
      value += currentPower * currentType
    }
    result[entry[0]] = value
  }

  for (const [key, value] of Object.entries(result)) {
    console.log(`${key}: ${value}`)
  }
}

solve(['Pesho: 2C, 4H, 9H, AS, QS',
  'Slav: 3H, 10S, JC, KD, 5S, 10S',
  'Peshoslav: QH, QC, QS, QD',
  'Slav: 6H, 7S, KC, KD, 5S, 10C',
  'Peshoslav: QH, QC, JS, JD, JC',
  'Pesho: JD, JD, JD, JD, JD, JD'
])