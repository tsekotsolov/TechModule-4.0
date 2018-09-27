function login (arr = []) {
  let username = arr.shift()
  let pass = username.split('').reverse().join('')
  let isLogged = false

  for (let i = 0; i < 3; i++) {
    if (pass === arr[i]) {
      isLogged = true
      break
    }
    console.log('Incorrect password. Try again.')
  }

  if (isLogged) {
    console.log(`User ${username} logged in.`)
    return
  }
  console.log(`User ${username} blocked!`)
}

login(['Tseko', 'fgsffs', 'fgsffs', 'fgsffs', 'okesT'])
