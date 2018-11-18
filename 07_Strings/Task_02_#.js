function solve (input) {
  const regex = /#[A-Za-z]+/gm
  let match

  while (match = regex.exec(input)) {
    console.log(`${match.toString().substring(1)}`)
  }
}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia')
