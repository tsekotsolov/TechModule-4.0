function artitmethile (input = []) {
  let maxProduct = [Number.NEGATIVE_INFINITY]

  input = input.map(Number)

  for (let i = 0; i < input.length; i++) {
    let s = input[i]
    if (s >= 1 && s <= 9) {
      let sectionArr = input.slice(i + 1, i + s + 1)
      let product = sectionArr.reduce((a, b) => a * b, 1)
      maxProduct.push(product)
    }
  }
  console.log(maxProduct.sort((a, b) => a - b).pop())
}
