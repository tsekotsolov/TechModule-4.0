function solve (input) {
  const regex = /:[A-Za-z\D](\b|$)/g
  let m
  while (m = regex.exec(input)) {
    console.log(m[0])
  }
}

solve('There are so many emoticons nowadays :P I have many ideas :O what input to place here :)')
