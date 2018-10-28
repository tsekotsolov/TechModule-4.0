let fixTheCar = new Promise((resolve, reject) => {
  let isFixed = false
  if (isFixed) {
    resolve('fixed')
  } else {
    reject ('yet broken')
  }
})

fixTheCar.then((parameterFromResolve) => {
  console.log(`The car is ${parameterFromResolve}`)
}).catch((parameterFromReject) => {
  console.log(`The car is ${parameterFromReject}`)
})
