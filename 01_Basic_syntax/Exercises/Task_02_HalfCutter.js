function halfCutter (length) {
  let cuts = 0
  while (length >= 1) {
    length /= 2
    cuts++
  }
  if (cuts === 0) {
    cuts = 1
  }
  console.log(`Length is ${length.toFixed(2)} cm. after ${cuts} cuts.`)
}

halfCutter(1.25)
