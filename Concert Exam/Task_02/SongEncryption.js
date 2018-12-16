function solve (input = []) {
  input.pop()
  for (const line of input) {
    const [artist, song] = line.split(':')
    const artistRegex = /^[A-Z][a-z \s']+$/gm
    const songRegex = /^[A-Z\s]+$/gm
    const isValid = artistRegex.test(artist) && songRegex.test(song)
    if (isValid) {
      let encryptionKey = artist.length
      let decryptedWord = ''
      for (const symbol of line) {
        const charCode = symbol.charCodeAt(0)
        let decryptedSymbol = ''

        if (symbol === ':') {
          decryptedSymbol = '@'
        } else if (symbol === ' ' || symbol === '\'' || symbol === '\t') {
          decryptedSymbol = symbol
        } else {
          if (charCode >= 65 && charCode <= 90) {
            if (charCode + encryptionKey > 90) {
              decryptedSymbol = String.fromCharCode(charCode - 26 + encryptionKey)
            } else {
              decryptedSymbol = String.fromCharCode(charCode + encryptionKey)
            }
          } else if (charCode >= 97 && charCode <= 122) {
            if (charCode + encryptionKey > 122) {
              decryptedSymbol = String.fromCharCode(charCode - 26 + encryptionKey)
            } else {
              decryptedSymbol = String.fromCharCode(charCode + encryptionKey)
            }
          }
        }
        decryptedWord += decryptedSymbol
      }
      console.log(`Successful encryption: ${decryptedWord}`)
    } else {
      console.log('Invalid input!')
    }
  }
}

solve([
  'Eminem:VENOM',
  'Linkin park:NUMB',
  'Drake:NONSTOP',
  'Adele:HELLO',
  'end'
])

// solve([
//   'Michael Jackson:ANOTHER PART OF ME',
//   'Adele:ONE AND ONLY',
//   "Guns n'roses:NOVEMBER RAIN",
//   'Christina Aguilera: HuRt',
//   'end'
// ])
