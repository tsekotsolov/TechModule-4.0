function solve (input) {
  const fieldLength = input.shift()
  const positionsOfBugs = input.shift().split(' ').map(Number)
  const commands = input

  // Setting up the field
  const field = []
  for (let i = 0; i < fieldLength; i++) {
    field.push(0)
  }
  // Placing bugs at their inital positons
  for (let i = 0; i < positionsOfBugs.length; i++) {
    if (positionsOfBugs[i] >= 0 && positionsOfBugs[i] < fieldLength) {
      field[positionsOfBugs[i]] = 1
    }
  }

  // Iterate through commands
  for (let i = 0; i < commands.length; i++) {
    let startIndex = Number(commands[i].split(' ')[0])
    const direction = commands[i].split(' ')[1]
    const flyingLength = Number(commands[i].split(' ')[2])
    let indextoLandAt = direction === 'right' ? startIndex + flyingLength : startIndex - flyingLength

    // Check if there is a bug at the starting index and if landing index is valid
    if (field[startIndex] === 1 && indextoLandAt >= 0 && indextoLandAt < field.length) {
      field[startIndex] = 0 // The bug takes off

      if (field[indextoLandAt] === 0) {
        field[indextoLandAt] = 1
      } else {
        while (field[indextoLandAt] === 1) {
          startIndex = indextoLandAt
          indextoLandAt = direction === 'right' ? startIndex + flyingLength : startIndex - flyingLength
          if (indextoLandAt < 0 || indextoLandAt >= field.length) {
            break
          } else if (field[indextoLandAt] === 0) {
            field[indextoLandAt] = 1
            break
          }
        }
      }
    } else if (field[startIndex] === 1) {
      field[startIndex] = 0 // The bug takes off and flies away
    }
  }
  console.log(field.join(' '))
}

solve([ 3, '0 1',
  '0 right 1',
  '2 right 1' ]
)

// solve([ 3, '0 1 2',
//   '0 right 1',
//   '1 right 1',
//   '2 right 1']
// )

// solve([ 5, '3',
//   '3 left 2',
//   '1 left -2']
// )
