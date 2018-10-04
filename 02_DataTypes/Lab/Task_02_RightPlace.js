function solve (firstString, char, secondString) {
  let resultString = firstString.replace('_', char)
  resultString === secondString ? console.log('Matched') : console.log('Not Matched')
}
