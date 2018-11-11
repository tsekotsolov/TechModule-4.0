function solve (input = []) {
  let result = []

  for (let i = 1; i < input.length; i++) {
    const [town, lat, long] = input[i].split('|').filter(Boolean)

    const obj = {
      Town: town.trim(),
      Latitude: Number(lat).toFixed(2) * 1,
      Longitude: Number(long).toFixed(2) * 1
    }

    result.push(obj)
  }

  console.log(JSON.stringify(result))
}

solve(['| Town | Latitude | Longitude |',
  '| Sofia | 42.696552 | 23.32601 |',
  '| Beijing | 39.913818 | 116.363625 |'
])
