function special (number) {
  for (let i = 1; i <= number; i++) {
    let sum = [...i.toString()].map(Number).reduce((a, b) => a + b)

    if (sum === 5 || sum === 7 || sum === 11) {
      console.log(`${i} -> True`)
    } else {
      console.log(`${i} -> False`)
    }
  }
}

special(15)
