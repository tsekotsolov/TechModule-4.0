const solve = (input = []) => {
  const [ budget, students, flourPrice, eggPrice, apronPrice ] = input

  const eggsNeeded = students * 10
  const apronsNeeded = Math.ceil(students * 1.2)
  const flourNeeded = students
  const freeFlourPackages = Math.floor(flourNeeded / 5)
  const price = eggsNeeded * eggPrice + apronsNeeded * apronPrice + (flourNeeded - freeFlourPackages) * flourPrice

  const success = `Items purchased for ${price.toFixed(2)}$.`
  const failure = `${Math.abs(budget - price).toFixed(2)}$ more needed.`

  return price <= budget ? success : failure
}

solve([ 50, 2, 1.0, 0.1, 10.0 ])
solve([ 100, 25, 4.0, 1.0, 6.0 ])
