function solve (input = []) {
  let obj = {}
  for (const row of input) {
    const [item, price] = row.split(' : ')
    obj[item] = price
  }

  const ordered = {}
  Object.keys(obj).sort((a, b) => {
    return a.toLowerCase().localeCompare(b.toLowerCase())
  }).forEach((key) => {
    ordered[key] = obj[key]
  })
  const printed = {}

  for (const key in ordered) {
    const firstLetter = key[0]
    if (!printed.hasOwnProperty(firstLetter)) {
      printed[firstLetter] = [`${key}: ${ordered[key]}`]
      continue
    }
    const currentData = printed[firstLetter]
    currentData.push(`${key}: ${ordered[key]}`)
    printed[firstLetter] = currentData
  }

  for (const key in printed) {
    console.log(key)
    for (const data of printed[key]) {
      console.log(`  ${data}`)
    }
  }
}
solve([
  'Appricot : 20.4',
  'Fridge : 1500',
  'TV : 1499',
  'Deodorant : 10',
  'Boiler : 300',
  'Apple : 1.25',
  'Anti-Bug Spray : 15',
  'T-Shirt : 10'
])
