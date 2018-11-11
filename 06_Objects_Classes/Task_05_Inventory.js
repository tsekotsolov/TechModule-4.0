function solve (input = []) {
  const heroes = []

  for (let i = 0; i < input.length; i++) {
    const [name, level, items] = input[i].split(' / ')
    const hero = {
      name: name,
      level: Number(level),
      items: items.split(', ')
    }
    heroes.push(hero)
  }
  console.log(JSON.stringify(heroes))
}
