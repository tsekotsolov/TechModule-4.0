const solve = (input = []) => {
  input.sort((a, b) => {
    if (a.length === b.length) {
      return a.localeCompare(b)
    }
    return a.length - b.length
  })

  console.log(input.join('\n'))
}
